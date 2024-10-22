let slides_indexes = new Map()

// Next/previous controls
function plusSlides(move_amount, slideshow_id) {
	if (!slides_indexes.has(slideshow_id)) {
		slides_indexes.set(slideshow_id, 0);
	}
	let index = slides_indexes.get(slideshow_id);
	show_slide(index + move_amount, slideshow_id);
}

// Thumbnail image controls
function currentSlide(index, slideshow_id) {
	if (!slides_indexes.has(slideshow_id)) {
		slides_indexes.set(slideshow_id, 0);
	}
	console.log("index:" + index)
	show_slide(index, slideshow_id);
}

function show_slide(index, slideshow_id) {
	let slide_show = document.getElementById(slideshow_id);
	let slides = slide_show.getElementsByClassName("mySlides");
	let dots = slide_show.getElementsByClassName("dot");

	if (index >= slides.length) {
		slides_indexes.set(slideshow_id, 0)
	} else if (index < 0) {
		slides_indexes.set(slideshow_id, slides.length - 1)
	} else {
		slides_indexes.set(slideshow_id, index)
	}

	let i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	let slideIndex = slides_indexes.get(slideshow_id);
	console.log(slideIndex);
	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
} 
