import Text from "./Text";

export default function Button({ /* count, */ handleClick }) {
  return (
    <>
      <button onClick={handleClick}>Count me </button>
      <Text /* count={count} */ />
    </>
  );
}
