if(localStorage.getItem("CurrentUser") !== null){
    document.getElementById("welcome").innerHTML = `welcome `+localStorage.getItem("CurrentUser")+``
}
