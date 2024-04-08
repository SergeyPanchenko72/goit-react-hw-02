import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import css from "./App.module.css";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
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
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);
  return (
    <div className={css.container}>
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
    </div>
  );
}

export default App;
