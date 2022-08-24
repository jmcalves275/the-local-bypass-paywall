function removePaywall() {
    removeElementsByClass("tp-modal")
    removeElementsByClass('tp-backdrop tp-active')

    makeScrollable()
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function makeScrollable() {
    var element = document.getElementById("top");
    element.classList.remove("tp-modal-open");
}

removePaywall()