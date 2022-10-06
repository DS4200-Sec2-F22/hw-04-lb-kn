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
function circleSelect(circle) {
	let c = document.getElementById(circle.target.id);
	let textDiv = document.getElementById("last-selected");
	if (c.classList.contains("selected")) {
		c.classList.remove("selected");
	}
	else {
		c.classList.add("selected");
	}
	textDiv.innerHTML = "Last point clicked: " + circle.target.id;
}

// parse through initial circles and apply hover and click functions
let points = document.getElementsByTagName("circle");
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener("mouseover", circleHover);
	points[i].addEventListener("mouseout", circleUnhover);
	points[i].addEventListener("click", circleSelect);
}

// form submit function
function submitClicked() {
	// get form information
    let xcoord = document.getElementById("xcoord"); 
    let ycoord = document.getElementById("ycoord");

    // x-coordinate information
    let selectedIndex_x = xcoord.selectedIndex;
    let selectedOption_x = xcoord.options[selectedIndex_x];
    let xValue = selectedOption_x.value;
    let xText = selectedOption_x.text;

    // y-coordinate information
    let selectedIndex_y = ycoord.selectedIndex;
    let selectedOption_y = ycoord.options[selectedIndex_y];
    let yValue = selectedOption_y.value;
    let yText = selectedOption_y.text;

    // setting id and circle object for new point
    let currentPointId = '(' + xText + ',' + yText + ')';

    let newCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    newCircle.setAttribute("id", currentPointId);
    newCircle.setAttribute("cx", xValue);
    newCircle.setAttribute("cy", yValue);
    newCircle.setAttribute("r", 10);

    // append to existing HTML frame
    document.getElementById("frame").appendChild(newCircle);

    // add event handlers
    justAdded = document.getElementById(currentPointId);
    justAdded.addEventListener("mouseover", circleHover);
    justAdded.addEventListener("mouseout", circleUnhover);
    justAdded.addEventListener("click", circleSelect);
}

// add event handler to button 
document.getElementById("subButton").addEventListener('click', submitClicked);
