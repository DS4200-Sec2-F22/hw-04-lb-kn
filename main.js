let points = document.getElementsByTagName("circle");

console.log(points)
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


// parse through circles and apply hover and click functions
function events(){
	for (let i = 0; i < points.length; i++) {
	console.log(points[i])
	points[i].addEventListener("mouseover", circleHover);
	points[i].addEventListener("mouseout", circleUnhover);
	points[i].addEventListener("click", circleSelect);

}
}
()

// form submit functions

function submitClicked() {

    // get information from inputs (this works because
    // we only one form with inputs, if you had multiple forms
    // with inputs you'd need to think of a different way to 
    // grab the elements)
    let xcoord = document.getElementById("xcoord"); 
    let ycoord = document.getElementById("ycoord");


    let selectedIndex_x = xcoord.selectedIndex;
    let selectedOption_x = xcoord.options[selectedIndex_x];

    let xValue = selectedOption_x.value
    let xText = selectedOption_x.text

    let selectedIndex_y = ycoord.selectedIndex;
    let selectedOption_y = ycoord.options[selectedIndex_y];

    let yValue = selectedOption_y.value
    let yText = selectedOption_y.text

    let currentPointId = '('+xText+','+yText+')'

    document.getElementById("frame").innerHTML += "<circle id=" +currentPointId +" cx="+xValue+ " cy=" +yValue+ " r='10' >";
    events()
}

// Add event handler to button 
document.getElementById("subButton").addEventListener('click', submitClicked);




