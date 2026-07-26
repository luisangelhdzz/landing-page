const hamburguerMenu=document.querySelector('#hamburguer-menu');
const closeBtn=document.querySelector('#close-btn')
const navbar=document.getElementById('navbar');
const featuresBtn=document.querySelector('#features-btn')
const companyBtn=document.querySelector('#company-btn')
const featuresUl=document.querySelector('#features-ul')
const companyUl=document.querySelector('#company-ul')


hamburguerMenu.addEventListener('click',()=>{
    navbar.style.display ='block'
})

closeBtn.addEventListener('click',()=>{
    navbar.style.display ='none'
})

featuresBtn.addEventListener('click',()=>{
    if(featuresUl.style.display==='block'){
        featuresUl.style.display='none'
    }else{
        featuresUl.style.display='block'
    }
})

companyBtn.addEventListener('click',()=>{
    if(companyUl.style.display==='block'){
        companyUl.style.display='none'
    }else{
        companyUl.style.display='block'
    }

})

