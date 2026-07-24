const hamburguerMenu=document.querySelector('#hamburguer-menu');
const closeBtn=document.querySelector('#close-btn')
const navbar=document.getElementById('navbar');
const featuresBtn=document.querySelector('#features-btn')

hamburguerMenu.addEventListener('click',()=>{
    navbar.style.display ='block'
})

closeBtn.addEventListener('click',()=>{
    navbar.style.display ='none'
})

featuresBtn.addEventListener('click',()=>{
    console.log('click');
    
})

