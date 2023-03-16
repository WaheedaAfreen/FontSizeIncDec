console.log('js')
var nam = document.getElementById('nam');
var inc = document.getElementById('inc');
var dec = document.getElementById('dec');

var initialFontSize = window.getComputedStyle(nam).fontSize;
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)));


inc.addEventListener('click', function () {
  initialFontSize += 10
  nam.style.fontSize = initialFontSize + "px";
})

dec.addEventListener('click', function () {
  initialFontSize -= 10
  nam.style.fontSize = initialFontSize + "px";
})