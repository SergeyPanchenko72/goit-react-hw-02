import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import "./App.css";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackParametr) => {
    setClicks({
      ...clicks,
      [feedbackParametr]: clicks[feedbackParametr] + 1,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  console.log(totalFeedback);
  return (
    <>
      <Description />
      <Options onUpdateFeedback={updateFeedback} />
      {totalFeedback ? <Feedback parametrs={clicks} /> : <Notification />}
    </>
  );
}

export default App;
