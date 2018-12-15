const $ = (element_id) => document.getElementById(element_id);

const shiftColors = (value) => (value + 1) % 360;

let colors = 0;

const animate = () => {
  colors = shiftColors(colors);
  const color = `hsl(${colors}, 100%, 50%)`;
  // const variation = Math.sin(Date.now() / 100);

  $('change-color').setAttribute('color', color);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

