import css from "./Fedback.module.css";
export default function Feedback({
  parametrs: { good, neutral, bad },
  total,
  positive,
}) {
  return (
    <div className={css.container}>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
