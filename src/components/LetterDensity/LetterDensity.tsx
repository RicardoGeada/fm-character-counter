import styles from "./LetterDensity.module.scss";

interface LetterDensityProps {
    text: string;
}

const LetterDensity: React.FC<LetterDensityProps> = ({text}) => {
    return (
        <section className={styles["letter-density-section"]}>
          <h2 className="text-2">Letter density</h2>
          {text.length == 0 && <p className={`${styles["notification"]} text-4`}>No characters found. Start typing to see letter density.</p>}
          <ul>
            <li className={styles["letter-item"]}>
              <div className={styles["label"]}>E</div>
              <div className={styles["progress-bar-container"]}>
                <div className={styles["progress-bar-fill"]}></div>
              </div>
              <div className={styles["percent"]}>40 (16,06%)</div>
            </li>
          </ul>
        </section>
    );

}

export default LetterDensity;