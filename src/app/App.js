import "./App.css";
import { Table } from "../components/Table/Table";
import { DataWindow } from "../data-window/DataWindow";

function App() {
  return (
    <div className="App">
      <header>It's Header</header>
      <main>
        <DataWindow>
          <Table />
        </DataWindow>
      </main>
      <footer>It's footer</footer>
    </div>
  );
}

export default App;
