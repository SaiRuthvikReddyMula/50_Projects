const panels = document.querySelectorAll('.panel')

// console.log(panels)

// panels.forEach((hi) => {
//     console.log(hi)
// })

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
            panel.classList.add('active')
    })
})

function removeActiveClasses () {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}