function startFun(){
	console.log("startFun() Started");
	document.getElementById("data").rows["seconds"].innerHTML = "reading data";
	index = 0;
	timer = setInterval(updateDisplay, time_interval);
	document.getElementById("startButton").disabled = true;
	document.getElementById("stopButton").disabled = false;
}

function stopFun(){
	console.log("stopFun() Started");
	clearInterval(timer);
	document.getElementById("startButton").disabled = false;
	document.getElementById("stopButton").disabled = true;
}