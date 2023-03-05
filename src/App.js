import "./App.css";
import InterWiewAccord from "./component/InterWiewAccord";
import data from "./helper/data";

function App() {
  return (
    <>
      <div className="header">
        <h2>REACT Interview Ouestions And Answers</h2>
      </div>
      <div className="app">
        <div className="main">
          <InterWiewAccord data={data} />
        </div>
      <div></div>
      </div>
    </>
  );
}

export default App;
