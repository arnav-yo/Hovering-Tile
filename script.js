// let tile = document.querySelector(".parallax-tile");
// let fingerOnTrackpad = false;
// let endPosition;
// let startPosition;
// let timer;
// let yo;

// document.addEventListener("mousemove", (e) => {
//   clearTimeout(yo);
//   yo = setTimeout(() => {
//     console.log("yooo");
//   }, 300);
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   const currentPosition = { x: mouseX, y: mouseY };
//   screenWidth = window.innerWidth;
//   screenHeight = window.innerHeight;
//   mouseXpercent = (mouseX / screenWidth) * 100;
//   mouseYpercent = (mouseY / screenHeight) * 100;
//   mouseYpercentFromCenter = mouseYpercent - 100;
//   //   console.log(mouseXpercent, mouseYpercent, mouseYpercent - 100);
//   //   tile.style.transform = `rotateX(${
//   //     ((screenHeight / 2 - mouseY) / (screenHeight / 2)) * 27
//   //   }deg) rotateY(${-((screenWidth / 2 - mouseX) / (screenWidth / 2)) * 27}deg)`;
//   tile.animate(
//     {
//       transform: `rotateX(${
//         ((screenHeight / 2 - mouseY) / (screenHeight / 2)) * 25
//       }deg) rotateY(${
//         -((screenWidth / 2 - mouseX) / (screenWidth / 2)) * 25
//       }deg`,
//     },
//     { duration: 10000, fill: "forwards" }
//   );
//   //   console.log(tile.style.transform);
//   if (fingerOnTrackpad) {
//     // tile.style.transition = "transform 1s ease";
//   } else {
//     fingerOnTrackpad = true;
//     startPosition = currentPosition;
//     console.log("mouse has started moving at", startPosition);
//     // tile.style.transition = "transform 0.1s ease";
//     // console.log("yo", tile.style.transition);
//   }
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     fingerOnTrackpad = false;
//     endPosition = currentPosition;
//     deltaX = Math.abs(endPosition.x - startPosition.x);
//     deltaY = Math.abs(endPosition.y - startPosition.y);
//     console.log(
//       "mouse has stopped moving at",
//       endPosition,
//       " change in x and y are:",
//       deltaX,
//       deltaY
//     );
//   }, 150);
// });

// console.log(tile);

document.addEventListener("DOMContentLoaded", () => {
  const tile = document.querySelector(".parallax-tile");

  const maxRotation = 30;
  let easingFactor = 0.03;

  let currentRotateX = 0;
  let currentRotateY = 0;
  let targetRotateX = 0;
  let targetRotateY = 0;

  function mouseMove(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let mouseXCoordinate = (mouseX - centerX) / centerX;
    let mouseYCoordinate = (centerY - mouseY) / centerY;

    targetRotateX = maxRotation * mouseYCoordinate;
    targetRotateY = maxRotation * mouseXCoordinate;
    console.log(mouseXCoordinate, mouseYCoordinate);
  }

  window.addEventListener("mousemove", mouseMove);
  const animate = () => {
    currentRotateX += (targetRotateX - currentRotateX) * easingFactor;
    currentRotateY += (targetRotateY - currentRotateY) * easingFactor;

    tile.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;

    requestAnimationFrame(animate);
  };

  animate();
});
