function createApp() {
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function randomHex(hexArrayValue) {
    return Math.floor(Math.random() * hexArrayValue.length);
  }

  function backgroundHexColor() {
    const bodyEle = document.querySelector("body");
    const buttonEle = document.querySelector(".btn");
    const hexValueEle = document.querySelector("#hex-value");

    bodyEle.style.backgroundColor = "#000000";
    hexValueEle.innerHTML = "#000000";

    buttonEle.addEventListener("click", (event) => {
      event.preventDefault;

      let hexValue = "#";

      for (let i = 0; i < 6; i++) {
        const colorIndex = randomHex(hexValues);
        hexValue += hexValues[colorIndex];
      }

      hexValueEle.innerHTML = hexValue;
      bodyEle.style.backgroundColor = hexValue;
    });
  }

  return {
    backgroundHexColor,
  };
}

const app = createApp();
app.backgroundHexColor();
