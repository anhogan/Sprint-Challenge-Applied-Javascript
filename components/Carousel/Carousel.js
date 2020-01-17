/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountainImage = document.createElement('img');
  const treeImage = document.createElement('img');
  const computerImage = document.createElement('img');
  const turntableImage = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  mountainImage.classList.add("active-image");

  mountainImage.src = "../assets/carousel/mountains.jpeg";
  computerImage.src = "../assets/carousel/computer.jpeg";
  treeImage.src = "../assets/carousel/trees.jpeg";
  turntableImage.src = "../assets/carousel/turntable.jpeg";

  leftButton.textContent = " < ";
  rightButton.textContent = " > ";

  function imgSlider() {
    let index = -1;
    let imgArr = [mountainImage, computerImage, treeImage, turntableImage];
    return function() {
      if (index < 3){
        index = index + 1;
        imgArr[index-1].classList.remove("active-image");
        imgArr[index].classList.add("active-image");
        console.log(index);
        return imgArr[index];
      } else {
        let index = 0;
        imgArr[index].classList.add("active-image");
        imgArr[3].classList.remove("active-image");
        console.log(index);
        return imgArr[index];
      }
    }
  };

  leftButton.addEventListener('click', imgSlider());

  rightButton.addEventListener('click', imgSlider());

  carousel.append(leftButton);
  carousel.append(mountainImage);
  carousel.append(computerImage);
  carousel.append(treeImage);
  carousel.append(turntableImage);
  carousel.append(rightButton);

  return carousel;
};

const carouselParent = document.querySelector('.carousel-container');
carouselParent.append(Carousel());