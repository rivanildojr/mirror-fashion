const banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
let bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector(".banner-destaque img").src = banners[bannerAtual];
}

const timer = setInterval(trocaBanner, 4000);
const $controle = document.querySelector(".pause");

$controle.onclick = function () {
  if ($controle.className == "pause") {
    clearInterval(timer);
    $controle.className = "play";
  } else {
    $controle.className = "pause";
    timer = setInterval(trocaBanner, 4000);
  }

  return false;
};
