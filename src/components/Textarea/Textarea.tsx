import styles from "./Textarea.module.scss";
import infoIcon from "./../../assets/images/icon-info.svg";
import { useState } from "react";


/**
 * Props for the Textarea component.
 * @property {string} text - The current text value of the textarea.
 * @property {(value: string) => void} onChangeText - Callback triggered when the text changes.
 * @property {() => void} onChangeExcludeSpace - Callback to toggle space exclusion.
 * @property {number} totalCharacters - The total characters in the text including/excluding spaces.
 * @property {number} wordCount - The total words in the text..
 */
interface TextareaProps {
  text: string;
  onChangeText: (value: string) => void;
  onChangeExcludeSpace: () => void;
  totalCharacters: number;
  wordCount: number;
}

const Textarea: React.FC<TextareaProps> = ({
  text,
  onChangeText,
  onChangeExcludeSpace,
  totalCharacters,
  wordCount
}) => {

  const [characterLimit, setCharacterLimit] = useState({ state: false, value: 0 });
  const readingTime = Math.ceil(wordCount / 200);
  const isInvalid = characterLimit.state && totalCharacters > characterLimit.value;

  /**
   * Toggles the character limit feature.
   * Sets the current text length as the new limit.
   * 
   */
  function handleSetCharacterLimitState() {
    setCharacterLimit((prev) => {
      return {
        state: !prev.state,
        value: totalCharacters,
      };
    });
  }

  /**
   * Sets a new value for the character limit.
   * Ensures that the limit does not exceed a maximum threshold (1,000,000).
   * 
   * @param {number} newValue - New value for the character limit.
   */
  function handleSetCharacterLimitValue(newValue: number) {
    const safeValue = Math.min(newValue, 1000000);
    setCharacterLimit((prev) => {
      return {
        ...prev,
        value: safeValue,
      };
    });
  }

  return (
    <div className={styles["textarea-container"]}>

      <label htmlFor="text-input" className="sr-only">Text input area</label>
      <textarea
        id="text-input"
        className={`${
          isInvalid ? styles["textarea--invalid"] : styles["textarea"]
        } text-3`}
        placeholder="Start typing here… (or paste your text)"
        value={text}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
        aria-invalid={isInvalid}
      ></textarea>

      {isInvalid && (
        <div className={`${styles["error-message"]} text-4`} role="alert" aria-live="assertive">
          <img src={infoIcon} alt="" aria-hidden="true"/>
          <span>
            Limit reached! Your text exceeds {characterLimit.value} characters.
          </span>
        </div>
      )}

      <div className={`${styles["textarea-settings"]} text-4`}>
        <label className={styles["checkbox-label"]}>
          <input id="excludeSpacesCheckbox" type="checkbox" onChange={onChangeExcludeSpace} />
          <span>Exclude Spaces</span>
        </label>

        <label className={styles["checkbox-label"]}>
          <input id="setCharacterLimitCheckbox" type="checkbox" onChange={handleSetCharacterLimitState} />
          <span>Set Character Limit</span>
          {characterLimit.state && (
            <div className={styles["input-wrapper"]}>
              <span>{characterLimit.value}</span>
              <label htmlFor="char-limit-input" className="sr-only">Character Limit Input</label>
              <input
                id="characterLimitInput"
                type="number"
                min={0}
                max={1000000}
                onChange={(e) => handleSetCharacterLimitValue(+e.target.value)}
                value={characterLimit.value}
              />
            </div>
          )}
        </label>

        <span>
          Approx. reading time: {readingTime > 0 ? "<" : ""} {readingTime}{" "}
          {readingTime > 1 ? "minutes" : "minute"}
        </span>
      </div>
    </div>
  );
};

export default Textarea;
