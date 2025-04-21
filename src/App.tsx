import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(excludeSpaces);
  }, [excludeSpaces])

  return (
    <div className="content">
      <Header />
      <main className="main-content">
        <h1 className="headline text-1">Analyze your text in real-time.</h1>
        <Textarea value={text} onChangeText={handleTextInput} onChangeExcludeSpace={handleExcludeSpacesCheck}/>
      </main>
    </div>
  );
}

export default App;
