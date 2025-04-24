import { useMemo, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";
import { getCharactersCount, getSentenceCount, getWordCount } from "./utils/textStats";

function App() {
  const [text, setText] = useState<string>("");
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);

  const totalCharacters = useMemo(() => getCharactersCount(text, excludeSpaces), [text, excludeSpaces]);
  const wordCount = useMemo(() => getWordCount(text), [text]);
  const sentenceCount = useMemo(() => getSentenceCount(text), [text])

  function handleTextInput(newText: string) {
    setText(newText);
  }

  function handleExcludeSpacesCheck() {
    setExcludeSpaces((prev) => !prev);
  }

  return (
    <div className="content">
      <Header />
      <main className="main-content">
        <h1 className="headline text-1">Analyze your text in real-time.</h1>
        <Textarea
          text={text}
          onChangeText={handleTextInput}
          onChangeExcludeSpace={handleExcludeSpacesCheck}
          totalCharacters={totalCharacters}
          wordCount={wordCount}
        />
        <section className="stats-section" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            Text Statistics
          </h2>
          <dl className="stat-container">
            <div className="stat--total-characters">
              <dt className="stat-value">{totalCharacters}</dt>
              <dd className="stat-title">
                Total Characters {excludeSpaces ? "(no space)" : ""}
              </dd>
            </div>

            <div className="stat--word-count">
              <dt className="stat-value">{wordCount}</dt>
              <dd className="stat-title">Word Count</dd>
            </div>

            <div className="stat--sentence-count">
              <dt className="stat-value">{sentenceCount}</dt>
              <dd className="stat-title">Sentence Count</dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}

export default App;
