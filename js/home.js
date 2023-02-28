function movePlanets(newIndex) {
    let targetValue = -100000;

    $("main > .destination-wrapper").each((index, element) => {
        console.log((targetValue*index)+"px");
        element.style.setProperty("--z-height", (targetValue*(index-newIndex))+"px");
    });
}

$(document).ready(function() {
    $(document).on("wheel", (e) => {
        console.log(e.originalEvent.deltaY);
    });
    movePlanets(0);
});
