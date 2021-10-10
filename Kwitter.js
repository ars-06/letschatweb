function login(){
    username = document.getElementById("Username").value;
    localStorage.setItem("name",username);
    window.location="Kwitter_room.html";
}
