const gallery = document.getElementById("slider");
const left = document.getElementsByClassName("left")[0];
left.classList.add("disabled");
const right = document.getElementsByClassName("right")[0];

const imagesUrl = [
    "images/ (1).jpg",
    "images/ (2).jpg",
    "images/ (3).jpg",
    "images/ (4).jpg",
    "images/ (5).jpg",
    "images/ (6).jpg",
    "images/ (7).jpg",
    "images/ (8).jpg",
    "images/ (9).jpg",
    "images/ (10).jpg",
    "images/ (11).jpg",
    "images/ (12).jpg",
    "images/ (13).jpg",
    "images/ (14).jpg",
    "images/ (15).jpg",
    "images/ (16).jpg",
    "images/ (17).jpg",
    "images/ (18).jpg",
];

const images = imagesUrl.length;

var selected = 0;

function init() {
  for (var i = 0; i < images; i++) {
    var imageWrapper = document.createElement("div");
    imageWrapper.id = `image_${i}`;
    imageWrapper.classList.add("wrapper");
    if (i === selected) {
      imageWrapper.classList.add("selected");
    }
    var image = document.createElement("img");
    image.src = imagesUrl[i]
    imageWrapper.appendChild(image);
    var mirrored = image.cloneNode();
    mirrored.classList.add("flipped");
    imageWrapper.appendChild(mirrored);
    gallery.appendChild(imageWrapper);
  }
}

init();

right.onclick = function () {
  selected++;
  if (selected > images - 1) {
    selected = images - 1;
  }
  handleSelection();
};

left.onclick = function () {
  selected--;
  if (selected < 0) {
    selected = 0;
  }
  handleSelection();
};

function handleSelection() {
  var images = document.getElementsByClassName("wrapper");
  if (selected === images.length - 1) {
    right.classList.add("disabled");
  } else {
    right.classList.remove("disabled");
  }
  if (selected === 0) {
    left.classList.add("disabled");
  } else {
    left.classList.remove("disabled");
  }
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.id === `image_${selected}`) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  }
}