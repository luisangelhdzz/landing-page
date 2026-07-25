const hamburguerMenu=document.querySelector('#hamburguer-menu');
const closeBtn=document.querySelector('#close-btn')
const navbar=document.getElementById('navbar');
const featuresBtn=document.querySelector('#features-btn')
const featuresUl=DocumentType.querySelector('#features-ul')
hamburguerMenu.addEventListener('click',()=>{
    navbar.style.display ='block'
})

closeBtn.addEventListener('click',()=>{
    navbar.style.display ='none'
})

featuresBtn.addEventListener('click',()=>{
    featuresUl.style.display
    
})

