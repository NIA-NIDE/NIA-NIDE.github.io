let cloudX = 0;
let direction = 1;

function animateCloud() {
  const cloud = document.getElementById('cloud');
  cloudX += direction * 2; // speed = 2 pixels per frame

  if (cloudX > 2000 || cloudX < -2000) {
    direction *= -1; // reverse direction
  }
  
  cloud.style.transform = `translateX(${cloudX}px)`;
  requestAnimationFrame(animateCloud);
}

animateCloud();