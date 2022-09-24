import { useState } from "react";
import memesData from "./memesData";

export default function Meme2() {
  // const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   console.log("useEffect ran");
  // });

  return (
    <main>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          getMemeImage();
        }}
      >
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          id="topText"
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          id="bottomText"
          name="bottomText"
          value={meme.bottomText}
        />
        <button type="button" className="form--button" onClick={getMemeImage}>
          ⚡ Get a new meme image
        </button>
      </form>
      <div id="meme">
        <img src={meme.randomImage} className="meme-img" />
        <p className="top">{meme.topText}</p>
        <p className="bottom">{meme.bottomText}</p>
      </div>
    </main>
  );
}
