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
  const onReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positive = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          parametrs={clicks}
          total={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
