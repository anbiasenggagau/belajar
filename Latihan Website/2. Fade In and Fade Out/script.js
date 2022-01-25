let nextButton=document.querySelector('.next')
let prevButton=document.querySelector('.prev')
let slide=document.querySelectorAll('.slide')
let row=slide.length-1
let index

nextButton.addEventListener('click', () => {
    for (let i=0; i<row+1; i++) {
        if (slide[i].classList.contains('active')==true) {
            console.log(slide[i])
            index=i+1>row? 0:i+1
            slide[i].classList.remove('active')
            slide[i].classList.add('disapear')
            break
        }
    }

    slide[index].classList.remove('disapear')
    slide[index].classList.add('active')
})

prevButton.addEventListener('click', () => {
    for (let i=0; i<row+1; i++) {
        if (slide[i].classList.contains('active')==true) {
            console.log(slide[i])
            index=i-1<0? row:i-1
            slide[i].classList.remove('active')
            slide[i].classList.add('disapear')
            break
        }
    }

    slide[index].classList.remove('disapear')
    slide[index].classList.add('active')
})



