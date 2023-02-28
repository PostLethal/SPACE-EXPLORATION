$(document).ready(function() {
    $(document).on("wheel", (e) => {
        console.log(e.originalEvent.deltaY);
    });
    
    // set init z height
    
    $("main > .destination-wrapper").each((index, element) => {
        console.log(index);
        element.style.transform = "translateZ("+(100000*index)+"px) translateY(0)";
        element.style.zIndex = -index;
    })
    
    // move planets to new Pos

    
    // set event listener for selector
    /*
    $(".destination-selector").children().click(function(event) {
        event.stopPropagation();
        console.log($(this).index());
        movePlanets($(this).index());
    });
    */
});
var currentIndex = 1;
var currentOffset = 0;
function movePlanets(newIndex) {
    if(newIndex == currentIndex) return;
    
    $("main > .destination-wrapper").animate({
        backgroundSize: '+=1'
      },{
        duration: 1000,
        easing: "swing",
        step: function(now,fx) {
            now -= currentOffset;
            $("main > .destination-wrapper").each((index, element) => {
                element.style.transform = "translateZ("+(-1000*((index+currentIndex)*(now))-1000*((index+newIndex)*(1-now)))+"px) translateY(100px)";
            });
          }
    },
    ).promise().done(function(){
        currentIndex = newIndex;
        currentOffset++;
    });
    
}