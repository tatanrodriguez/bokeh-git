<template>
  <div class="container-contacto">
    <div class="column-contacto-uno">
      <h1>
        Contáctanos 
      </h1>
      <hr/>
      <p>
        Nos emociona ser parte de nuevos proyectos, escríbenos si quieres que trabajemos juntos y nos comunicaremos contigo en el menor tiempo posible.
      </p>

      <h3>
        Siguenos en nuestras Redes Sociales
      </h3>
      <div class="redes">
        <ul>
          <li>
            <a href="https://www.instagram.com/bokeh.fotografia/" target="_blank">
              <img src="../assets/img/utility/instagram.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/bokehfotografia.col" target="_blank">
              <img src="../assets/img/utility/facebook.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/bokehfotografiacol" target="_blank">
              <img src="../assets/img/utility/behance.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://500px.com/bokehfotografia" target="_blank">
              <img src="../assets/img/utility/500px.svg" alt="">
            </a>
          </li>
        </ul>
      </div>

      <h3>
        ¡¡Conversemos!!
      </h3>
      <div class="contact">
        <ul>
          <li>
            <a class="escribenos-link" href="https://wa.me/573106708816?text=Hola,%20quisiera%20cotizar%20con%20ustedes" target="_blank">
              <img src="../assets/img/utility/whatsapp.svg"  alt="">
              <p>Escribenos en whatsapp</p>
            </a>
          </li>
          <li>
            <a class="escribenos-link" href="mailto:bokehfotografia2019@gmail.com?subject=The%20subject%20of%20the%20mail">
              <img src="../assets/img/utility/gmail.svg" alt="">
              <p>bokehfotografia2019@gmail.com</p>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="column-contacto-dos">
      <div class="image">
        <!-- www.123formbuilder.com script begins here --><iframe allowTransparency="true" style="min-height:300px; height:inherit; overflow:auto;" width="100%" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="//www.123formbuilder.com/my-contact-form-5301987.html">
        </iframe><!-- www.123formbuilder.com script ends here -->
        <link rel="stylesheet" href="../src/assets/css/style.css">
      </div>
    </div>
  </div>
</template>

<style scoped>

/*  animacion view router */
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

.container-contacto {
  width: 100%;
  display: flex;
  overflow-x: hidden !important;
  overflow-y: auto;
  height: 100vh !important;
}
.column-contacto-uno {
  padding: 0 5rem 0 5rem;
  width: 50%;
  height: 100vh;
  /* background: red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.column-contacto-dos {
  width:50%;
  height:100vh;
}

.column-contacto-dos .image {
  width:100%;
  height:100%;
  background:url("../assets/img/slide/slide1.jpg");
  background-position: center center;
  background-size: cover;
}
.column-contacto-uno h1 {
  font-family: 'montserratregular';
  font-weight: 100;
  margin-bottom:30px;
  margin-top: 100px;
  color:var(--colorp);
}
.column-contacto-uno h3 {
  font-family: 'montserratregular';
  font-weight: 100;
  margin-bottom:0px;
  margin-top: 20px;
  color:var(--colorp);
}

.column-contacto-uno hr {
  width: 150px;
  margin-bottom:30px;
  color:var(--colorp);
  background: var(--colorp);
  border-top: 2px solid #81927F;
}
.column-contacto-uno p {
  font-family: 'montserratregular';
  line-height: 20px;
  margin-bottom: 20px;
}
.column-contacto-uno h3  {
  font-family: 'montserratregular';
  font-weight: 100;
  color: var(--colorp);

}
 .redes ul {
  display: flex;
  align-items: center;

}
 .redes ul li {
  list-style: none;
}
 .redes ul li a img {
   transition: all .2s ease-in-out;
  /* width:30px; */
  height: 30px;
  margin-top: 20px;
  margin-right:15px;
}
.redes ul li a:hover img {
  transform: scale(1.2);
}

.escribenos-link {
  display: flex;
  
}

.contact ul {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin:10px 0px;
}
.contact ul li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color:#0F0F0F;
  margin: 5px 0px;
}
.contact ul li {
  list-style: none;
  display: flex;
  align-items: center;
}
.contact ul li a img {
  transition: all .2s ease-in-out;
  width:30px;
  height: 30px;
  /* margin-top: 20px; */
  /* margin-right:15px; */
}

.contact ul li a:hover img {
  transform: scale(1.2);
}
.contact ul li p {
  padding: 0px 10px;
  margin:0
}

@media screen and (max-width:1250px) {
  .column-contacto-uno {
    padding: 5rem 2rem 5rem 2rem;
  }
}

@media screen and (max-width:1024px) {
  .column-contacto-uno h1 {
  font-family: 'montserratregular';
  font-weight: 100;
  margin-bottom:30px;
  margin-top: 0px;
  color:var(--colorp);
}
  .container-contacto {
    flex-direction: column;
    height: auto;
  }
  .column-contacto-uno {
    padding: 6rem 2rem 5rem 2rem;
    width: 100%;
    height: auto;
    box-sizing: border-box;
  }
  .column-contacto-dos {
    width: 100%;
    /* height: 100%; */
  }
  .column-contacto-dos .image {
    width:100%;
    /* height:100%; */
    background:url("../assets/img/slide/slide1.jpg");
    background-position: center center;
    background-size: cover;
  }
}



</style>
 