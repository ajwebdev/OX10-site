

$('.ox10-menu-button').click(function(){
  $('#navbarText').show();
  document.getElementById("navbarText").style.height = "100%";
  document.getElementById("navbarText").style.width = "100%";
});

function closeNav() {
  document.getElementById("navbarText").style.height = "0";
  document.getElementById("navbarText").style.width = "0";
}