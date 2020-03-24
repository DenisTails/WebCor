var body = document.querySelector('body');
var btn = document.querySelectorAll('.btn');
var fonts = document.querySelector('#fonts');
var fnt = document.querySelector('#fnt');
var sizes = document.querySelector('#sizes');
var btn2 = document.querySelectorAll('.btn2');
var alg = document.querySelector('#alg');
var algt = document.querySelectorAll('.alg');
for( let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        if(i===0){
            body.classList.add('arial');
            body.classList.remove('cursiv','sans');
        }
        if(i===1){
            body.classList.add('cursiv');
            body.classList.remove('arial','sans');
        }
        if(i===2){
            body.classList.add('sans');
            body.classList.remove('cursiv','arial');
        }
    });
}
fnt.addEventListener('mouseover',()=>{
fnt.innerHTML = "Для изменения шрифта текста используется команда font-family: (Имя шрифта). <a href='https://devdocs.io/css/font-family'>https://devdocs.io/css/font-family</a>";
fnt.classList.add('fnt');
});
for( let i=0;i<btn2.length;i++){
    btn2[i].addEventListener('click',()=>{
        if(i===0){
            sizes.classList.add('rem1');
            sizes.classList.remove('rem2','rem3');
        }
        if(i===1){
            sizes.classList.add('rem2');
            sizes.classList.remove('rem1','rem3');
        }
        if(i===2){
            sizes.classList.add('rem3');
            sizes.classList.remove('rem1','rem2');
        }
    });
}
for( let i=0;i<algt.length;i++){
    alg.addEventListener('click',()=>{
        if(i===0){
            algt[i].classList.add('left');
        }
        if(i===1){
            algt[i].classList.add('center');
        }
        if(i===2){
            algt[i].classList.add('right');
        }
        if(i===3){
            algt[i].classList.add('justify');
        }
    });
}
