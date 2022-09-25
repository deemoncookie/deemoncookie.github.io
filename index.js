var password = "yes";

function passcheck() {
	if(document.getElementById('pass1').value != password) {
		alert('SO DI MOKO MAHAL? HMP AAAA IYAK NAKU');
		return false;
	}
	if(document.getElementById('pass1').value == password) {
		alert('yey love you too baby	');
	}
}