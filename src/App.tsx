import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";

function App() {

  const [text, setText] = useState<string>('');
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);

  function handleTextInput(newText:string) {
    setText(newText);
  }

  function handleExcludeSpacesCheck() {
    setExcludeSpaces(prev => !prev)
  }

  return (
    <div className="content">
      <Header />
      <main className="main-content">
        <h1 className="headline text-1">Analyze your text in real-time.</h1>
        <Textarea text={text} onChangeText={handleTextInput} excludeSpaces={excludeSpaces} onChangeExcludeSpace={handleExcludeSpacesCheck}/>
        <section className="stat-container">

          <div className="stat--total-characters">
            <div className="stat-value">00</div>
            <div className="stat-title">Total Characters</div>
          </div>

          <div className="stat--word-count">
            <div className="stat-value">00</div>
            <div className="stat-title">Word Count</div>
          </div>

          <div className="stat--sentence-count">
            <div className="stat-value">00</div>
            <div className="stat-title">Sentence Count</div>
          </div>

        </section>
      </main>
    </div>
  );
}

export default App;
