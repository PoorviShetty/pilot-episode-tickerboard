import "./App.css";
import Board from "./components/Board";
import Logo from "./img/logo.png";
import Departure from "./img/depart.png";

function App() {
  return (
    <div className="App">
      <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center py-3">
          <div className="col-md-8 bg-black rounded p-3 my-2 d-flex justify-content-between">
            <h1 className="text-center d-inline">
              <span className="text-white mt-2">THE EDITORIAL BOARD</span>
            </h1>
            <img src={Logo} alt="board-logo" className="board-logo d-inline" />
          </div>
          <div className="col-md-8 bg-black rounded py-3">
            <h1 className="text-center fw-bold">
              <img src={Departure} alt="depart-icon" className="logo" />
              <span className="depart-head">&nbsp;DEPARTURES</span>
            </h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 bg-black py-3 rounded">
            <Board />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
