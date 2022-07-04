butao = document.getElementById("butao");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    butao.style.display = "block";
  } else {
    butao.style.display = "none";
  }

  function topFunction() {
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
  }
}
