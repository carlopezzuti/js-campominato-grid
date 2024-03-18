let playBtn = document.getElementById('playBtn')
let gridHTML = document.getElementById('grid')
let difficultySelection = document.getElementById('difficulty')

gridHTML.innerHTML = "<h2>Scegli una difficoltà e comincia a giocare!"


function generateGrid(number, name) {
    for (let i = 1; i <= number; i++) {
        let box = document.createElement('div')

        box.classList.add('box', name)

        box.innerHTML = `<span>${[i]}</span>`

        box.addEventListener('click', function () {
            this.classList.toggle('box-active')
            console.log(`Cella numero: ${[i]}`)
        })

        gridHTML.append(box)
    }
}

playBtn.addEventListener('click', function () {

    gridHTML.innerHTML = ""

    let difficultyValue = difficultySelection.value

    if (difficultyValue === 'easy') {
        return generateGrid(100, 'box-easy')
    } else if (difficultyValue === 'medium') {
        return generateGrid(81, 'box-medium')
    } else {
        return generateGrid(49, 'box-hard')
    }
})