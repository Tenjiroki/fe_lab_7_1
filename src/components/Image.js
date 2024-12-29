import React, { useState } from "react";

function Image() {
  const [imageWidth, setImageWidth] = useState(400);
  const [image, setImage] = useState({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%B4%D0%B5%D1%80.%29_1703%2C_1834_%D1%80%D1%80._%D0%A1%D1%96%D0%BB%D1%8C_7762-HDR.jpg/1280px-%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%B4%D0%B5%D1%80.%29_1703%2C_1834_%D1%80%D1%80._%D0%A1%D1%96%D0%BB%D1%8C_7762-HDR.jpg",
    alt: "Церква",
  });

  const increaseSize = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const decreaseSize = () => {
    setImageWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 50 : prevWidth));
  };

  const removeImage = () => {
    setImage(null);
  };

  const addImage = () => {
    setImage({
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%B4%D0%B5%D1%80.%29_1703%2C_1834_%D1%80%D1%80._%D0%A1%D1%96%D0%BB%D1%8C_7762-HDR.jpg/1280px-%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%B4%D0%B5%D1%80.%29_1703%2C_1834_%D1%80%D1%80._%D0%A1%D1%96%D0%BB%D1%8C_7762-HDR.jpg",
      alt: "Церква",
    });
  };

  return (
    <div>
      {image && <img src={image.src} alt={image.alt} width={imageWidth} />}
      <div>
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
