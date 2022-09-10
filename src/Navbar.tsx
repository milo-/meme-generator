import trollface from "./assets/troll-face.png";

export default function NavBar() {
  return (
    <div className="nav--style">
      {" "}
      <img src={trollface} className="logo" alt="Vite logo" />
      <h2 className="nav--text">Meme Generator</h2>
    </div>
  );
}
