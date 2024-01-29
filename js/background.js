const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");

bgImage.src = `img/${chosenImage}`;

bgImage.className = "BackGroundImage"

bgImage.style.backgroundImage = `url('${bgImage.src}')`;

document.body.appendChild(bgImage);
