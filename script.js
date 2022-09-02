var sun = document.getElementById('sun'),
moon = document.getElementById('moon')
  dark = document.getElementById("bg-changer").href;

const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
})

sun.addEventListener('click', (e)=>{
  e.preventDefault();
  
  document.getElementById("bg-changer").href = "styles.css"
})


moon.addEventListener('click', (e)=>{
  e.preventDefault()
  document.getElementById("bg-changer").href = "dark.css"
})


// sun.addEventListener('click', (e) => {
//   document.body.classList.toggle('dark', e.target.checked);
// });