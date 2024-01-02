import "./App.css";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <h1>Tic Tac Toe App</h1>
      <Grid numberOfCards={9} />
    </>
  );
}

export default App;
