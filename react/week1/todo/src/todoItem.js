export function TodoItem(props) {
  return (
    <h2>
      * {props.title},{props.date}
    </h2>
  );
}
