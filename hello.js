let my = document.getElementById('hello');

my.addEventListener('click', function(e){
  console.log(e.target.innerText)
});