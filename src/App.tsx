import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";

function App() {

  const [text, setText] = useState('');

  function handleTextInput(newText:string) {
    setText(newText);
  }

  return (
    <div className="content">
      <Header />
      <main className="main-content">
        <h1 className="headline text-1">Analyze your text in real-time.</h1>
        <Textarea value={text} onChange={handleTextInput}/>
      </main>
    </div>
  );
}

export default App;
