const btn = document.querySelector('.btn');
const span = document.querySelector('.text_span');
const links = document.querySelectorAll('.navigation a');
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function pickRandomColor() {
    return Math.floor(Math.random() * colors.length);
}


const f = document.getElementsByClassName('f');

for(let i=0; i<f.length; i++) {
    f[i].addEventListener('click', function(){
        if(!(f[i].classList.contains('active'))) {
            f[i].classList.add('active');
            for(let j=0; j<f.length; j++){
                if((i != j) && (f[j].classList.contains('active'))){
                    f[j].classList.remove('active');
                }
            }
        }
    });
}




btn.addEventListener('click', function (){
    let random = pickRandomColor();
    document.body.style.backgroundColor = colors[random];
    span.textContent = colors[random];
});

links.onclick = function () {
    alert('aaa');
};