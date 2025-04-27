import styles from "./LetterDensity.module.scss";
import { getLetterPercentage, getLetterCount, getUniqueLetters } from "./utils/letterDensityUtils";

interface LetterDensityProps {
    text: string;
}

const LetterDensity: React.FC<LetterDensityProps> = ({text}) => {

    const uniqueLetters = getUniqueLetters(text);
    const sortedLetters = [...uniqueLetters].sort((a,b) => {
      return getLetterCount(text, b) -getLetterCount(text, a);
    })

    const letterItemElements = sortedLetters.map((letter) => {
      return (<li className={styles["letter-item"]} key={letter}>
        <div className={styles["label"]}>{letter}</div>
        <div className={styles["progress-bar-container"]}>
          <div className={styles["progress-bar-fill"]} style={{width:`${getLetterPercentage(text, letter)}%`}}></div>
        </div>
        <div className={styles["percent"]}>{getLetterCount(text, letter)} ({getLetterPercentage(text, letter)}%)</div>
      </li>)
    })

    return (
        <section className={styles["letter-density-section"]}>
          <h2 className="text-2">Letter density</h2>
          {text.trim().length === 0 && <p className={`${styles["notification"]} text-4`}>No characters found. Start typing to see letter density.</p>}
          <ul>
            {letterItemElements}
          </ul>
        </section>
    );

}

export default LetterDensity;