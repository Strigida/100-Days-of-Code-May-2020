//feed randomized advice into web-page based on radio button and click
//get radio input
//get button
function changeImageText() {
	//document.getElementById("myImage").innerHTML = "New Words Appear!";
	if(document.getElementById("adviceImage").src == "https://i0.pickpik.com/photos/908/101/183/eye-iris-algae-macro-preview.jpg") {
		document.getElementById("adviceImage").src = "https://i1.pickpik.com/photos/475/109/77/cd-cover-fantasy-hands-bubble-preview.jpg";
	} else {
		document.getElementById("adviceImage").src = "https://i0.pickpik.com/photos/908/101/183/eye-iris-algae-macro-preview.jpg";
	}
	console.log("Finished function, yeah!");
}
//randomize quotes from advice topic selected
//output advice to div in web page
//allow to be done multiple times
