const btn1=document.querySelector('.btn');
const btn2 =document.querySelector('.btn2');
const s1=document.querySelector('.select1');
const s2=document.querySelector('.select2');
const audio=document.querySelector('audio');
const line=document.querySelector('.runline');
const img=document.querySelector('.base img');
var kt=0;
var a;
btn1.onclick=function(){
    btn1.style.display="none";
    btn2.style.animation= 'run linear 3.5s forwards ';
    btn2.style.display="inline-block";
}
s1.onclick=function(){
    btn2.style.display="none";
    audio.src='https://tainhac123.com/listen/yeu-la-cuoi-phat-ho-ft-x2x.sme954UUZsz0.html';
    audio.autoplay='true',
    kt=1;
    img.style.animation='img linear 3s forwards'
    img.style.display='block';
    clearInterval(a);
}
function loadsong(){
    audio.src='';
    audio.autoplay='true';
    kt=1;
}
s2.onclick=function(){
    if(kt==0){
        btn2.style.display='none';
        a=setInterval(function(){
        btn2.style.display='inline-block';
            if(kt==1){
            btn2.style.display='none';
            clearInterval(a);
            }
        }, 2000);
        line.innerText='Buồn ghê, em chọn "No" kìa:)';
    }
}
img.addEventListener('click',function(){
    img.src='./asset/src/img/letter 2.jpg'
})

