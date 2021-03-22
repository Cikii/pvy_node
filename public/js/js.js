const socket = io();
let btn = document.getElementById("button");
let zpravy = document.getElementById("zpravy");
let pole = document.getElementById("status");
let name = document.getElementById("fname");

btn.addEventListener('click', function() {
    if(name.value != "" && pole.value != "") {
        socket.emit('message', pole.value, name.value);
    } else {
        alert("Nezadal jste jmeno nebo status");
    }
});

socket.on('message', (msg, name, date) => {
    zpravy.innerHTML += "<div id='zprava' class='row'><div id='box-zleva' class='col-xs-6'><img src='./avatar2.jpg' height='150px'></div><div id='box-zprava' class='col-xs-6'><h1>"+name+"</h1><p style='color:gray;'>"+date+"</p></<p>"+msg+"</p></div></div>";
});     