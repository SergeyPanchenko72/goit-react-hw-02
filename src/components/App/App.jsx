import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import "./App.css";
import Options from "../Options/Options";

function App() {
  const feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <>
      <Description />
      <Options />
      <Feedback parametrs={feedback} />
    </>
  );
}

export default App;
