const a = document.querySelector('.room');
const b = document.querySelectorAll('.row');
const c = document.getElementById('count');
const d = document.getElementById('total');
const f = document.getElementById('movie1');


let g = +f.value;


function fun() {
  const h = document.querySelectorAll('.row .seat.selected');
  const i = h.length;
  c.innerText = i;
  d.innerText = i * g;

}
f.addEventListener('change',e=>{
g=e.target.value
fun();
});


a.addEventListener('click', e => {
if (
   e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
) {
e.target.classList.toggle('selected');

fun();
}
});





