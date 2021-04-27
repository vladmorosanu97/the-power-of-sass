function getPlayButton(contor) {
    if(contor === true) {
        document.getElementById("play-song").style.display = "flex";
    }
    else {
        document.getElementById("play-song").style.display = "none";
    }
}

function toogleSelected(id) {
    let elements = document.getElementsByClassName('selected');
    Array.prototype.forEach.call(elements, (element) => {
        element.classList.remove('selected');
    });

    document.getElementById(id).classList.add('selected');
    
}