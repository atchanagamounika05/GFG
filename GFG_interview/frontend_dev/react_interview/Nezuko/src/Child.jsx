export default function Child({ name, handleIncrement, count }) {
  return (
    <>
      Hi {name}
      <button onClick={handleIncrement}>{count}</button>
    </>
  );
}
