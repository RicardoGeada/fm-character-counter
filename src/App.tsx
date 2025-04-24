import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";

function App() {
  const [text, setText] = useState<string>("");
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);

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
          excludeSpaces={excludeSpaces}
          onChangeExcludeSpace={handleExcludeSpacesCheck}
        />
        <section className="stats-section" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Text Statistics</h2>
          <dl className="stat-container">
            <div className="stat--total-characters">
              <dt className="stat-value">00</dt>
              <dd className="stat-title">Total Characters</dd>
            </div>

            <div className="stat--word-count">
              <dt className="stat-value">00</dt>
              <dd className="stat-title">Word Count</dd>
            </div>

            <div className="stat--sentence-count">
              <dt className="stat-value">00</dt>
              <dd className="stat-title">Sentence Count</dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}

export default App;
