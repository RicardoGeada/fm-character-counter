import "./App.scss";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";

function App() {
  return (
    <div className="content">
      <Header />
      <main className="main-content">
        <h1 className="headline text-1">Analyze your text in real-time.</h1>
        <Textarea />
      </main>
    </div>
  );
}

export default App;
