import styles from "./Textarea.module.scss";
import infoIcon from "./../../assets/images/icon-info.svg";
import { useMemo, useState } from "react";

interface TextareaProps {
  text: string;
  onChangeText: (value: string) => void;
  excludeSpaces: boolean;
  onChangeExcludeSpace: () => void;
}

const Textarea: React.FC<TextareaProps> = ({
  text,
  onChangeText,
  excludeSpaces,
  onChangeExcludeSpace,
}) => {
  
  const [characterLimit, setCharacterLimit] = useState({state: false, value: 0});
  const readingTime = useMemo(() => calculateReadingTime(text), [text]);
  const currentTextLength = excludeSpaces ? text.replace(/\s+/g, "").length : text.length;
  const isInvalid = characterLimit.state && currentTextLength > characterLimit.value;

  function handleSetCharacterLimitState() {
    setCharacterLimit((prev) => {
      return {
        state: !prev.state,
        value: prev.state ? prev.value : currentTextLength,
      };
    });
  }

  function handleSetCharacterLimitValue(newValue: number) {
    setCharacterLimit((prev) => {
      return {
        ...prev,
        value: newValue,
      };
    });
  }

  function calculateReadingTime(text: string): number {
    const wordsPerMinute = 200;
    let cleanedText;
    try {
      cleanedText = text.replace(/[^\p{L}\p{N}\s]/gu, "");
    } catch {
      cleanedText = text.replace(/[^a-zA-ZäöüÄÖÜß0-9\s]/g, "");
    }
    const words = cleanedText.trim().split(/\s+/);
    const wordCount = words.filter((word) => word.length > 0).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

  return (
    <div className={styles["textarea-container"]}>
      <textarea
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
        <div className={`${styles["error-message"]} text-4`}>
          <img src={infoIcon} alt="" />
          <span>
            Limit reached! Your text exceeds {characterLimit.value} characters.
          </span>
        </div>
      )}

      <div className={`${styles["textarea-settings"]} text-4`}>
        <label className={styles["checkbox-label"]}>
          <input type="checkbox" onChange={onChangeExcludeSpace} />
          <span>Exclude Spaces</span>
        </label>

        <label className={styles["checkbox-label"]}>
          <input type="checkbox" onChange={handleSetCharacterLimitState} />
          <span>Set Character Limit</span>
          {characterLimit.state && (
            <input
              type="number"
              min={0}
              max={999}
              onChange={(e) => handleSetCharacterLimitValue(+e.target.value)}
              value={characterLimit.value}
            />
          )}
        </label>

        <span>
          Approx. reading time: {readingTime > 0 ? '<' : ''} {readingTime} {readingTime > 1 ? 'minutes' : 'minute'}
        </span>
      </div>
    </div>
  );
};

export default Textarea;
