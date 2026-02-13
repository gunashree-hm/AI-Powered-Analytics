import "./App.css";
import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";
import Charts from "./components/charts";
import Insights from "./components/insights";

function App() {
  return (
    <div>
      <Header />
      <QuestionBox />
      <Charts />
      <Insights />
    </div>
  );
}

export default App;
