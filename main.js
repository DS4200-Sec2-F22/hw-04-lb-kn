let points = document.getElementsByTagName("circle");

// circle hover functions
function circleHover(circle) {
	let c = document.getElementById(circle.target.id);
	c.classList.add("highlight");
}

function circleUnhover(circle) {
	let c = document.getElementById(circle.target.id);
	c.classList.remove("highlight");
}

// circle click function
let clicks = 0;

function circleSelect(circle) {
	let c = document.getElementById(circle.target.id);
	let textDiv = document.getElementById("last-selected");
	if (c.classList.contains("selected") && clicks > 0) {
		c.classList.remove("selected");
	}
	else {
		c.classList.add("selected");
	}
	textDiv.innerHTML = "Last point clicked: " + circle.target.id;
	clicks += 1;
}

// parse through circles and apply hover and click functions
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener("mouseover", circleHover);
	points[i].addEventListener("mouseout", circleUnhover);
	points[i].addEventListener("click", circleSelect);
}

// form submit functions
