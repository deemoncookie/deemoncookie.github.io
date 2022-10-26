var password = "no";

function passcheck() {
	if(document.getElementById('pass1').value != password) {
		alert('LAH EPALLLLL');
		return false;
	}
	if(document.getElementById('pass1').value == password) {
		alert('YEY');
	}
}