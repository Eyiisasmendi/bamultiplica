/* ===== PLANTILLA ===== */

// IMPLEMENTACION DEL HEADER

document.body.insertAdjacentHTML('afterbegin',
`
<header id="templateHeader" class="grid-layout ">
<div id="divLogo" class="grid-child-header flex-conteiner-header ">
    <div class="child-logo logo-img">
        <a href="index.html"> <img src="../img/logo_p3d.png" alt=""></a>
    </div>
    <div class="child-logo ">
        <span class="titulo">
            <h1><b>P</b>3D</h1>
        </span></a>
    </div>

</div>
<nav class="grid-child-header flex-navbar">
    <div class="child-navbar">
        <ul>
            <a href="#index.html">
                <li>Inicio</li>
            </a>
            <a href="./assets/pages/catalogo.html">
                <li>Catálogo</li>
            </a>
            <a href="./assets/pages/oferta.html">
                <li>Oferta</li>
            </a>
            <a href="./assets/pages/contactos.html">
                <li>Contacto</li>
            </a>
        </ul>
    </div>
    <div class="child-navbar ">
        <ul>
            <a href="">
                <li><span class="material-symbols-outlined">
                        search
                    </span></li>
            </a>
            <a href="">
                <li><span class="material-symbols-outlined">
                        person
                    </span></li>
            </a>
            <a href="">
                <li><span class="material-symbols-outlined">
                        shopping_cart
                    </span></li>
            </a>


        </ul>
    </div>
</nav>
</header>
`,
)

// IMPLEMENTACION DEL FOOTER
document.body.insertAdjacentHTML('beforeend', `
<footer id="footer" class="footer">
    <div class="grupo1_footer">
        <div class="box1">
            <form action="">
                <div>
                    <span class="subtitulo"><b>SUSCRÍBETE</b></span>
                </div>
                <label for="txtEmailFooter">¡Suscríbete y te regalamos los gastos de envío en tu primer
                    pedido!</label>
                <input type="txtEmailFooter" name="email" id="mailFooter" placeholder="Tu email" required>
                <button class="cardBtn btnSusc">Suscribite</button>
            </form>
        </div>
        <div class="box2 ">
            <div>
                <span class="subtitulo"><b> REDES SOCIALES</b></span>
            </div>
            <div class="redesMenu">
                <a href="#" target="_blank">
                    <img class="iconRedes" src="../img/redes/icon-facebook.png" alt="facebook">
                </a>
                <a href="#" target="_blank">
                    <img class="iconRedes" src="../img/redes/icon-instagram.png" alt="">
                </a>
                <a href="#" target="_blank">
                    <img class="iconRedes" src="../img/redes/icon-twitter.png" alt="">
                </a>
                <a href="#" target="_blank">
                    <img class="iconRedes" src="../img/redes/icon-whatsapp.png" alt="">
                </a>
            </div>
        </div>
    </div>
</div>
<div class="grupo2_footer">
<span>©Copyright: 2023 - Proyect #impresion3D. Todos los derechos reservados</span>
</div>
</footer>
`)