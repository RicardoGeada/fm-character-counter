import styles from "./Textarea.module.scss";
import infoIcon from "./../../assets/images/icon-info.svg";

function Textarea() {
  return (
    <div className={styles["textarea-container"]}>
      <textarea
        className={`${styles["textarea"]} text-3`}
        placeholder="Start typing here… (or paste your text)"
      ></textarea>
      <div className={`${styles["error-message"]} text-4`}>
        <img src={infoIcon} alt="" />
        <span>Limit reached! Your text exceeds 300 characters.</span>
      </div>
    </div>
  );
}

export default Textarea;
