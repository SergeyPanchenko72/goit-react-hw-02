import css from "./Option.module.css";
export default function Options({ onUpdateFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.container}>
      <button
        onClick={() => {
          onUpdateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onUpdateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onUpdateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            onReset();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
