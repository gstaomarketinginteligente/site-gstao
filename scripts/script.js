class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.mainContentsText = document.querySelector(".texto");
    this.hamburgericon = document.querySelector(".fa-bars");
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.mobileMenu.classList.toggle(this.activeClass);
    this.navList.classList.toggle(this.activeClass);
    this.animateLinks();

    this.mainContentsText.classList.toggle(this.activeClass);
    this.mainContentsText.style.animation
      ? (this.mainContentsText.style.animation = "")
      : (this.mainContentsText.style.animation =
          "main-contents-translatex 0.3s");

    if (this.hamburgericon.classList[1] === "fa-bars") {
      this.hamburgericon.classList.remove("fa-bars");
      this.hamburgericon.classList.add("fa-times");
    } else {
      this.hamburgericon.classList.remove("fa-times");
      this.hamburgericon.classList.add("fa-bars");
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();

setalogosright = document.getElementById("seta-logos-right");
setalogosleft = document.getElementById("seta-logos-left");

const scrollContainer = document.querySelector(".sec-6-logos");

setalogosright.addEventListener("click", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += 200;
});

setalogosleft.addEventListener("click", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft -= 200;
});

sec6DataAosDelayTime =
  document.querySelector(".sec-6-text").attributes[2].value;
sec6DataAosTransitionTime =
  document.querySelector(".sec-6-text").attributes[3].value;

if (window.innerWidth < 1080) {
  sec6DataAosDelayTime = 0;
  sec6DataAosTransitionTime = 100;
}

console.log(window.innerWidth);
