export default function StartScreen({ message, setIsStarted }) {
  return (
    <>
      <div className="start-screen">
        <h1>{message}</h1>
        <button className="start-btn" onClick={() => setIsStarted(true)}>
          <h3>{"ПОГНАЛИ"}</h3>
        </button>
      </div>
    </>
  );
}
