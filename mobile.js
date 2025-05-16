window.isMobile = function(){
  return (window.matchMedia("(any-hover:none)").matches) 
};
function remToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
window.onload = function() {
 var mobile = window.isMobile();
 if(mobile){
    var body = document.getElementById("body");
    body.style.fontSize = remToPixels(2);
 }
};