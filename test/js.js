function whereIs(element) {
	/* Is element visible in viewport? Return "b" if before, "v" if visible and "a" if after */
	const rect = element.getBoundingClientRect();
	if (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <=
		(window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	)
	  return "v"; // Visible
	if (rect.top < 0 || rect.left < 0) return "b"; // Before
	return "a"; // After
  }
  
  function loadBars() {
	let imgs = document.querySelectorAll("main img"); // All main images
	let bar_before = document.querySelector("#bar_before ul");
	let bar_after = document.querySelector("#bar_after ul");
	for (let i = 0; i < imgs.length; i++) {
	  let img = imgs[i];
	  let where_is = whereIs(img);
	  /* Append HTML of image to bars */
	  bar_before.insertAdjacentHTML(
		"beforeend",
		`<li ${where_is == "b" ? "" : "class='hidden'"} id="bb_${
		  img.id
		}"> <a href="#${img.id}"><img src="${img.src}" alt="${
		  img.alt
		}" /></a></li>`
	  ); // Add class as hidden if is not before
	  bar_after.insertAdjacentHTML(
		"beforeend",
		`<li ${where_is == "a" ? "" : "class='hidden'"} id="ba_${
		  img.id
		}"> <a href="#${img.id}"><img src="${img.src}" alt="${
		  img.alt
		}" /></a></li>`
	  );
	  
	}
  }
  
  window.onload = loadBars; // Load bars on page load
  
  function refreshBars() {
	let imgs = document.querySelectorAll("main img"); // All main images
  
	/* For each img */
	for (let i = 0; i < imgs.length; i++) {
	  let img = imgs[i];
	  let where_is = whereIs(img);
  
	  /* Change class of images if needed */
		document.querySelector(`#bb_${img.id}`).className =
		where_is == "b" ? "" : "hidden"; // Visible if before current - show on *before* bar

		document.querySelector(`#ba_${img.id}`).className =
		where_is == "a" ? "" : "hidden"; // Visible if before current - show on *after* bar
		
		if(where_is == 'v') {
			document.querySelector(`#bb_${img.id}`).scrollIntoView({
				behavior: 'auto',
				inline: 'center'
			});
			document.querySelector(`#ba_${img.id}`).scrollIntoView({
				behavior: 'auto',
				inline: 'center'
			});
			
			
		}
		
	}
  }

document.body.addEventListener('scroll',refreshBars)
  
function OpenImage(elem) {
	big_image.style.display = 'flex'
	big_image.style.animation = 'show .5s ease-in-out forwards'
	img_in_big.src = '../images/'+elem.dataset.image
}
function CloseImage() {
	big_image.style.animation = 'close .5s ease-in-out forwards'
	setTimeout(function() {
		big_image.style.display = 'none'
	},500)
}

// ADD IMAGES
images = []
for (let x = 0; x < 48; x++) {
	let elem = x+1
	images.push(' ('+elem+').jpg')
}


let container = document.querySelector('main').querySelector('ul')
for (let x = 0; x < images.length; x++) {
	const element = images[x];
	console.log(element)
	let li = document.createElement('li')

	// li.innerHTML = `<img id="img_${x}" src="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled" alt="SAMPLE TEXT" onclick='OpenImage(this)'/> SAMPLE TEXT`
	li.innerHTML = `<img id="img_${x}" src="../thumbs/${element}" data-image="${element}" alt="SAMPLE TEXT" onclick='OpenImage(this)'/> SAMPLE TEXT`

	
	container.appendChild(li)
}

// let temp = document.querySelectorAll('img')
// for (let x = 0; x < temp.length; x++) {
// 	const element = temp[x];
// 	element.setAttribute('onclick','OpenImage(this)')
// }