import styles from "./LetterDensity.module.scss";

interface LetterDensityProps {
    text: string;
}

const LetterDensity: React.FC<LetterDensityProps> = ({text}) => {

    // Alle Buchstaben rausfiltern
    const uniqueLetters = getUniqueLetters(text);
    const sortedLetters = [...uniqueLetters].sort((a,b) => {
      return  getTotal(text, b) - getTotal(text, a);
    })

    function getUniqueLetters(text: string): string[] {
      const array = text.replace(/\s+/g, "").toUpperCase().split("");
      const set = [...new Set(array)];
      return set;
    }

    // Buchstaben Prozentsatz errechnen
    function getTotal(text:string, letter:string) : number {
      const regex = new RegExp(`[${letter.toUpperCase()}${letter.toLowerCase()}]`, 'g');
      const total = text.match(regex)?.length || 0;
      return total;
    }

    function getPercentage(text:string, letter:string) {
      const total = getTotal(text, letter);
      if (total > 0) return ((total / text.replace(/\s+/g, "").length) * 100).toFixed(2);
      else return 0;
    }
    // Der größe nach rendern
    const letterItemElements = sortedLetters.map((letter) => {
      return (<li className={styles["letter-item"]} key={letter}>
        <div className={styles["label"]}>{letter}</div>
        <div className={styles["progress-bar-container"]}>
          <div className={styles["progress-bar-fill"]} style={{width:`${getPercentage(text, letter)}%`}}></div>
        </div>
        <div className={styles["percent"]}>{getTotal(text, letter)} ({getPercentage(text, letter)}%)</div>
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