import "./App.css";
import AppState from "./context/AppState";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <AppState>
        <Container></Container>
      </AppState>
    </div>
  );
}

export default App;
