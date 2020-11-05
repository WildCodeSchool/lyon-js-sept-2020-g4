// interpilation function: movement and speed of scroll
function easeInOut(currentTime, start, change, duration) {
  let time = currentTime / (duration / 2);
  if (time < 1) {
    return (change / 2) * time * time + start;
  }
  time -= 1;
  return (-change / 2) * (time * (time - 2) - 1) + start;
}

// function taking viewport element, the position we want to scroll to and how long the scroll lasts
function scrollToAnimate(params) {
  const { element, to, duration, scrollDirection } = params;

  const start = element[scrollDirection];
  const change = to - start;
  const increment = 1000 / 60;

  // recursive set time out function slowly increasing the time until it is more than the time we want to scroll
  function animateScroll(elapsedTime) {
    const time = elapsedTime + increment;
    const position = easeInOut(time, start, change, duration);
    element[scrollDirection] = position;
    if (time < duration) {
      window.requestAnimationFrame(animateScroll.bind(null, time));
    }
  }
  // animateScroll(0);
  window.requestAnimationFrame(animateScroll.bind(null, 0));
}

export default scrollToAnimate;
