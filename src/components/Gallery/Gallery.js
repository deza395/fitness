import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import img1 from "./img/cocodrilo.png";
import img2 from "./img/metegol.png";
import img3 from "./img/luces.jpg";
import img4 from "./img/tejo.jpg";
import img5 from "./img/ring.jpg";
import img6 from "./img/sonido.jpg";

function Gallery() {
  let data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const getImg = (image) => {
    setTempImg(image);
    setModel(true);
  };
  return (
    <div clasName="box-gallery">
      <div className={model ? "model open" : "model"}>
        <img src={tempImg} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.image)}
            >
              <img
                src={item.image}
                style={{ width: "108%", height: "200px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
