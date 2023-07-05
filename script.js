var header = document.getElementById("header");
var navigationHeader = document.getElementById("navgation_header");
var content = document.getElementById("content");
var showSidebar = false;

function toggleSidebar(){

    showSidebar = !showSidebar
    if(showSidebar){
        // navigationHeader.style.animationName = "showSidebar"
        navigationHeader.style.marginLeft = "0"
        content.style.filter = "blur(2px)"
        // true
    }else{
        // false
        navigationHeader.style.marginLeft = "-100vw"
        content.style.filter = ""
    }
    // console.log(showSidebar)
}
function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}
window.addEventListener('resize', function(event) {
    if(window.innerWidth > 990 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});