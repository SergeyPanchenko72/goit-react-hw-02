import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import "./App.css";
import Options from "../Options/Options";

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
    console.log(clicks);
  };
  return (
    <>
      <Description />
      <Options onUpdateFeedback={updateFeedback} />
      <Feedback parametrs={clicks} />
    </>
  );
}

export default App;
