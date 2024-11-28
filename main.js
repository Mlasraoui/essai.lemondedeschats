let btn = document.getElementById('btn')

window.onscroll = function (){
    if(scrollY >= 400)
    {
        btn.style.display = 'block';
}else{
    btn.style.display = 'none';
}
}


btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
let slidbtn = document.getElementById('slidbtn')
let slid = document.getElementById('slid')
slidbtn.onclick = function(){

    slid.style.display = 'none'
}

let letterbtn = document.getElementById('letterbtn')
let letter = document.getElementById('letter')

letterbtn.onclick = function (){
    
letter.style.display = 'none'
}
