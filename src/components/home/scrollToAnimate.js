/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
// function taking viewport element, the position we want to scroll to and how long the scroll lasts
function scrollToAnimate(params) {
  const { element, to, duration, scrollDirection } = params;

  const start = element[scrollDirection];
  const change = to - start;
  const increment = 1000 / 60;

  // recursive set time out function slowly increasing the time until it is more than the time we want to scroll
  function animateScroll(elapsedTime) {
    elapsedTime += increment;
    const position = easeInOut(elapsedTime, start, change, duration);
    element[scrollDirection] = position;
    if (elapsedTime < duration) {
      window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
    }
  }
  // animateScroll(0);
  window.requestAnimationFrame(animateScroll.bind(null, 0));
}
// interpilation function: movement and speed of scroll
function easeInOut(currentTime, start, change, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return (change / 2) * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
}

export default scrollToAnimate;
