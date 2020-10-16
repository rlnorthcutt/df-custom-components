const setProperty = (duration) => {
  document.getElementById('example_js_open').documentElement.style.setProperty(
    "--animation-time",
    duration + "s"
  );
};

const changeAnimationTime = () => {
  const animationDuration = Math.random();
  document.getElementById('example_js_open').documentElement.style.setProperty(animationDuration);
};

document.getElementById('example_js_open').documentElement.style.setInterval(changeAnimationTime, 1000);
