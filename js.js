const gallery = document.getElementById("slider");
const left = document.getElementsByClassName("left")[0];
left.classList.add("disabled");
const right = document.getElementsByClassName("right")[0];

var startTime, endTime;
function start_timer() {
  console.log('start count elapse time')
  startTime = performance.now();
};

function end_timer() {
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms
  console.log(timeDiff + " elapsed time");
}

const imagesUrl = [
  'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655dd52aeece0b744ad0048e_655dfa4311aa97744330de27/scale_1200',
  'https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716681600&semt=ais_user',
  'https://img2.akspic.ru/previews/2/7/7/4/7/174772/174772-skelet-18650-past-rebro-kost-500x.jpg',
  'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
  'https://static.insales-cdn.com/images/products/1/2336/567986464/WhatsApp_Image_2022-07-13_at_23.31.04__3_.jpeg_-_%D0%A1%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B0_%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B9_Wiows.png',
  'https://w7.pngwing.com/pngs/835/230/png-transparent-desktop-marble-wall-decal-marble-miscellaneous-texture-branch-thumbnail.png',
  'https://cs6.pikabu.ru/post_img/big/2017/06/30/4/1498801619124951735.jpg',
  'https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled'
];

// for (let x = 0; x < 48; x++) {
//   let elem = x+1
//   imagesUrl.push('images/ ('+elem+').jpg')
// }

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
  start_timer()
  selected++;
  if (selected > images - 1) {
    selected = images - 1;
  }
  handleSelection();
  end_timer()
};

left.onclick = function () {
  start_timer()
  selected--;
  if (selected < 0) {
    selected = 0;
  }
  handleSelection();
  end_timer()
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