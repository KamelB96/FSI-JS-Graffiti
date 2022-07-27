
// Select some elements...

//aligning text left
let header = document.querySelector('#page-header')
header.style.textAlign = "left"
header.style.backgroundColor = "blue"


//changing dog image

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
dogImages[i].style.borderRadius = '50px'
dogImages[i].style.rotate = '180deg'
}

//changing dog text align left
let dogName = document.querySelectorAll(".dog-name")
for(let i = 0; i < dogName.length; i++){
    dogName[i].style.textAlign = 'left'
    }


//footer style
let footer = document.querySelector('.footer')
footer.style.borderStyle = 'solid'
footer.style.color = "pink"
footer.style.backgroundColor = "orange"