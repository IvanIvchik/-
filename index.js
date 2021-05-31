function rollUpChat() {
    document.getElementById("chatBot").style.display = "none";
    document.getElementById("stringChatBot").style.display = "block";
}

function openChat() {
    document.getElementById("chatBot").style.display = "block";
    document.getElementById("stringChatBot").style.display = "none";
}

let timerId = setTimeout(() => openChat(), 10000);