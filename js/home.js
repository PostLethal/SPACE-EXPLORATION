$(document).on("wheel", (e) => {
	console.log(e.originalEvent.deltaY);
});


// set init z height

$("main > .destination-wrapper").each((index, element) => {
    console.log(index);
    element.style.transform = "translateZ("+(100000*index)+"px) translateY(0)";
    element.style.zIndex = -index;
})

$(document).on("click", (e) => {

	$("main > .destination-wrapper").animate({
        now: '+=1'
      },{
        duration: 5000,
        easing: "swing",
        step: function(now,fx) {
            $("main > .destination-wrapper").each((index, element) => {
                console.log(index);
                element.style.transform = "translateZ("+(100000*(index-(now)))+"px) translateY(100px)";
            });
          },
          duration:1000
    })
});