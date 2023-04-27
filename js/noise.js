const noise = document.getElementById("noise");

let noiseData = [];
for (let i = 0; i < 256; i++) {
  noiseData[i] = Math.floor(Math.random() * 256);
}

function generateNoise(width, height) {
  let canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext("2d");
  let imageData = ctx.createImageData(width, height);
  let data = imageData.data;

  for (let i = 0; i < width * height; i++) {
    let alpha = 255;
    let value = noiseData[i % 256];

    data[i * 4] = value;
    data[i * 4 + 1] = value;
    data[i * 4 + 2] = value;
    data[i * 4 + 3] = alpha;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

noise.style.backgroundImage = `url(${generateNoise(window.innerWidth, window.innerHeight)})`;

window.addEventListener("resize", () => {
  noise.style.backgroundImage = `url(${generateNoise(window.innerWidth, window.innerHeight)})`;
});
