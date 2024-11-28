export default function Navbar({ onSetPage }) {
  return (
    <nav>
      <button onClick={() => onSetPage("planets")}>Planets</button>
      <button onClick={() => onSetPage("people")}>People</button>
    </nav>
  );
}
