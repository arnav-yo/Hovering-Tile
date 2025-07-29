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
