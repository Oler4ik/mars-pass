//Add comment in Anfrage:
function addComment(){
	// Create element:
	const comment = document.createElement("textarea");
	comment.rows="5";
	comment.name="comment";
	const commentLable = document.createElement("label");
	commentLable.for = "comment";
	commentLable.innerHTML="KOMMENTAR";
	
	// Append to Form:
	const myForm = document.getElementById("comment");
    myForm.appendChild(commentLable);
	myForm.appendChild(comment);
}


//Anfrage senden mit Überprüfung von gegebenen Daten
function sent(){
	// Verhindert das Neuladen der Seite
    event.preventDefault(); 
	
	let alt = document.getElementById("alt");
	let vorname = document.getElementById("vorname");
	let email = document.getElementById("email");
	let message = document.getElementById("message");
	message.innerHTML = null; //leeren den ganzen felld "message"
	
	if (alt.value < 18 && alt.value > 0){
		const fail = document.createElement("h3");
		fail.innerHTML = "Bitte beachten Sie!";
		const fMessage = document.createElement("p");
		fMessage.innerHTML = "Entschuldigung, " + vorname.value + ". Sie müssen mindestens 18 Jahre alt sein, um eine Anfrage zu senden.";
		
		message.appendChild(fail);
		message.appendChild(fMessage);
		return false;
		
	} else if (alt.value >= 18){
		const success = document.createElement("h3");
		success.innerHTML = "Glückwunsch!";
		
		const sMessage = document.createElement("p");
		sMessage.innerHTML = "Vielen Dank, " + vorname.value + "! Ihre Anfrage wurde erfolgreich gesendet. " + 
			"Sie erhalten innerhalb von einer Woche eine Antwort an "+ email.value + " .";
		
		message.appendChild(success);
		message.appendChild(sMessage);
		return false;
	} else {
		return true;
	}
}