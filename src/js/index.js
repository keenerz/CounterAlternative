//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let seconds = 0;
let isPaused = false;
setInterval(() => {
	let stringSeconds = seconds.toString();
	let numberOfLetters = stringSeconds.length;
	let expectedNumberOfLetter = 6;
	let difference = expectedNumberOfLetter - numberOfLetters;
	stringSeconds = new Array(difference).fill(0).join("") + stringSeconds;
	ReactDOM.render(
		<SecondsCounter seconds={stringSeconds} onClick={pauseCounter} />,
		document.querySelector("#app")
	);
}, 1000);

function pauseCounter() {
	if (isPaused === false) {
		seconds++;
	} else {
		isPaused = true;
		console.log("tests");
	}
}
console.log(document.querySelector("#pause"));
console.log(document);
