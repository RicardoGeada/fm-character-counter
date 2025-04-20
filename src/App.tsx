import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="content">
        <h1 className="headline text-1">Analyze your text in real-time.</h1>
      </main>
    </>
  );
}

export default App;
