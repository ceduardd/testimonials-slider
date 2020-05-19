const chk = document.getElementById('chk');
const label = document.getElementById('label');
const ball = document.getElementById('ball');

// change to dark mode event
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  text.classList.toggle('dark');
  name.classList.toggle('dark');
  ocupation.classList.toggle('dark');
  label.classList.toggle('dark');
  ball.classList.toggle('dark');
});
