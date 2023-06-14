var x
var bandera1
var bandera2

document.querySelectorAll('.galeria_fotos').forEach(elemento => {
    elemento.querySelector('.box_imagen_galeria').style.left = '0%'
    elemento.querySelector('.contador_galeria').innerHTML = `<p>1/${elemento.querySelectorAll('.box_imagen_galeria').length}</p>`

    elemento.addEventListener('touchstart', function (event) {
        x = event.touches[0].clientX;
    })

    elemento.addEventListener('touchmove', function (event) {
        bandera1 = false
        bandera2 = false
        if (event.touches[0].clientX < x - 50) {
            bandera1 = true
            bandera2 = false
        }

        if (event.touches[0].clientX > x + 50) {
            bandera1 = false
            bandera2 = true
        }

        if (event.touches[0].clientX == x) {
            bandera1 = false
            bandera2 = false
        }
    })

    elemento.addEventListener('touchend', function (event) {
        if (bandera1 == true) {
            let padre = elemento
            let indice = 0
            let indice_actual = 0

            padre.querySelectorAll('.box_imagen_galeria').forEach(elemento => {
                if (elemento.style.left == '0%') {
                    indice_actual = indice
                }
                indice++
            })

            if (indice_actual < padre.querySelectorAll('.box_imagen_galeria').length - 1) {

                padre.querySelectorAll('.box_imagen_galeria')[indice_actual].style.left = '-100%'

                padre.querySelectorAll('.box_imagen_galeria')[indice_actual + 1].style.left = '0%'

                padre.querySelector('.contador_galeria').innerHTML = `<p>${indice_actual + 2}/${padre.querySelectorAll('.box_imagen_galeria').length}</p>`
            }
        }

        if (bandera2 == true) {

            let padre = elemento
            let indice = 0
            let indice_actual = 0

            padre.querySelectorAll('.box_imagen_galeria').forEach(elemento => {
                if (elemento.style.left == '0%') {
                    indice_actual = indice
                }
                indice++
            })

            if (indice_actual > 0) {

                padre.querySelectorAll('.box_imagen_galeria')[indice_actual].style.left = '100%'

                padre.querySelectorAll('.box_imagen_galeria')[indice_actual - 1].style.left = '0%'

                padre.querySelector('.contador_galeria').innerHTML = `<p>${indice_actual}/${padre.querySelectorAll('.box_imagen_galeria').length}</p>`
            }
        }
    })
})





document.querySelectorAll('.flecha1').forEach(elemento => {
    elemento.addEventListener("click", (e) => {
        let padre = e.target.parentElement.parentElement
        let indice = 0
        let indice_actual = 0

        padre.querySelectorAll('.box_imagen_galeria').forEach(elemento => {
            if (elemento.style.left == '0%') {
                indice_actual = indice
            }
            indice++
        })

        if (indice_actual > 0) {

            padre.querySelectorAll('.box_imagen_galeria')[indice_actual].style.left = '100%'

            padre.querySelectorAll('.box_imagen_galeria')[indice_actual - 1].style.left = '0%'

            padre.querySelector('.contador_galeria').innerHTML = `<p>${indice_actual}/${padre.querySelectorAll('.box_imagen_galeria').length}</p>`
        }
    })
})


document.querySelectorAll('.flecha2').forEach(elemento => {
    elemento.addEventListener("click", (e) => {

        let padre = e.target.parentElement.parentElement
        let indice = 0
        let indice_actual = 0

        padre.querySelectorAll('.box_imagen_galeria').forEach(elemento => {
            if (elemento.style.left == '0%') {
                indice_actual = indice
            }
            indice++
        })

        if (indice_actual < padre.querySelectorAll('.box_imagen_galeria').length - 1) {

            padre.querySelectorAll('.box_imagen_galeria')[indice_actual].style.left = '-100%'

            padre.querySelectorAll('.box_imagen_galeria')[indice_actual + 1].style.left = '0%'

            padre.querySelector('.contador_galeria').innerHTML = `<p>${indice_actual + 2}/${padre.querySelectorAll('.box_imagen_galeria').length}</p>`
        }
    })
})


function autoplay_galeria() {

    document.querySelectorAll('.galeria_fotos').forEach(elemento => {

        if (elemento.dataset.over != 1) {

            let indice = 0
            let indice_actual = 0

            elemento.querySelectorAll('.box_imagen_galeria').forEach(elemento2 => {

                if (elemento2.style.left == '0%') {
                    indice_actual = indice
                }
                indice++

            })

            if (indice_actual < elemento.querySelectorAll('.box_imagen_galeria').length - 1) {

                elemento.querySelectorAll('.box_imagen_galeria')[indice_actual].style.left = '-100%'

                elemento.querySelectorAll('.box_imagen_galeria')[indice_actual + 1].style.left = '0%'

                elemento.querySelector('.contador_galeria').innerHTML = `<p>${indice_actual + 2}/${elemento.querySelectorAll('.box_imagen_galeria').length}</p>`

            } else {
                elemento.querySelectorAll('.box_imagen_galeria').forEach(elemento2 => {
                    elemento2.style.left = '100%'
                })

                elemento.querySelectorAll('.box_imagen_galeria')[0].style.left = '0%'

                elemento.querySelector('.contador_galeria').innerHTML = `<p>1/${elemento.querySelectorAll('.box_imagen_galeria').length}</p>`
            }

        }
    })
    setTimeout(autoplay_galeria, 2000)
}

document.querySelectorAll('.galeria_fotos').forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        elemento.dataset.over = "1"
    })
    elemento.addEventListener('mouseleave', () => {
        elemento.dataset.over = "0"
    })
})



document.querySelectorAll('.icono_zoom').forEach(element => {

    element.addEventListener('click', (e) => {

        let galeria = e.target.parentElement.parentElement.parentElement

        galeria.classList.toggle('galeria_zoom')

    })


})