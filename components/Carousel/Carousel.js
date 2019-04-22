class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement
    this.carouselImages = this.carouselElement.querySelectorAll("img")
    this.carouselImages.forEach((img, i) => img.setAttribute("data-tab", `${i}`));
    this.carouselLength = this.carouselImages.length;
    this.leftButton = this.carouselElement.querySelector(".left-button");
    this.rightButton = this.carouselElement.querySelector(".right-button");
    this.leftButton.addEventListener('click', this.selectPrevious.bind(this));
    this.rightButton.addEventListener('click', this.selectNext.bind(this));
    this.currentIndex = 0;
    this.currentImg = this.carouselElement.querySelector(`img[data-tab='${this.currentIndex}']`);
    this.currentImg.setAttribute("style", "display: flex");
  }

  selectNext () {
    this.currentIndex = (this.currentIndex + 1)%(this.carouselLength);
    this.carouselElement.querySelectorAll("img").forEach(img => img.setAttribute("style", "display: none"));
    this.currentImg = this.carouselElement.querySelector(`img[data-tab='${this.currentIndex}']`);
    this.currentImg.setAttribute("style", "display: flex");
  };

  selectPrevious () {
    this.currentIndex = (this.currentIndex + this.carouselLength - 1)%(this.carouselLength);
    this.carouselElement.querySelectorAll("img").forEach(img => img.setAttribute("style", "display: none"));
    this.currentImg = this.carouselElement.querySelector(`img[data-tab='${this.currentIndex}']`);
    this.currentImg.setAttribute("style", "display: flex");
  };
}

let carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
