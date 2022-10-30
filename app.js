console.log('aasan hai');


const menu = document.querySelector('.menu')
const cross = document.querySelector('.close')
const navlist = document.querySelector('.navlist')


menu.addEventListener('click', ()=>{
    menu.style.display = 'none'
    cross.style.display = 'block'
    navlist.style.display = 'flex'
})

cross.addEventListener('click', ()=>{
    menu.style.display = 'block'
    cross.style.display = 'none'
    navlist.style.display = 'none'

    
})




