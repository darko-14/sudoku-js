const cell = document.getElementsByClassName('cell')

Array.from(cell).forEach((v) => {
    v.addEventListener('click', (e) => {
        console.log(e)
    })
})