<template>
  <div class="container-acerca">
    <div class="column-acerca-uno">
      <h1>
        ¡Hola!
      </h1>
      <hr/>
      <p>
        Somos Jonathan y Mónica creadores de Bokeh Fotografía y nos alegra saber que visitas nuestro sitio web. 
        <br/>
        <br/>
        Este hermoso proyecto inicio a mediados del 2017 mientras estudiábamos Diseño y Producción de Multimedia, a lo largo de nuestra carrera nos enamoramos de la fotografía y de la maravillosa versatilidad que nos ofrece al momento de capturar una emoción, una idea o un recuerdo.
        <br/>
        <br/>
        Desde entonces trabajamos Dia a Dia con el fin de mejorar y poder ofrecer todo nuestro potencial ante cualquier reto o proyecto que emprendamos.
        <br/>
        <br/>
        Agradecemos tu apoyo por adelantado, puedes seguirnos en nuestras redes sociales y conocer nuestro trabajo con el hashtag <strong style="color: #81927F;"> <a href="https://www.instagram.com/explore/tags/bokehfotografiacol/" class="hash" target="_blank">#BokehFotografiaCol</a></strong>.
        <br/>
        <br/>
        ¡¡¡Te esperamos!!!
      </p>

      <div class="herramientas" @click="showHerram">
         Herramientas de Trabajo
      </div>

      <transition name="fade">
        <div v-if="herramientas" class="herramientas-de-trabajo">
        <div class="button-close" @click="hideHerram">
          <img src="../assets/img/utility/cerrar.svg" alt="">
        </div>
        <div class="herram">
          <ul>
            <li>
              <a href="https://www.nikon.com.mx/nikon-products/product-archive/dslr-cameras/d5300.html" target="_blank">
              <img src="../assets/img/utility/nikond5300.png" alt="">
              Nikon D5300</a>
            </li>
            <li>
              <a href="https://articulo.mercadolibre.com.co/MCO-455631910-lente-yongnuo-50mm-f18-para-nikon-_JM" target="_blank">
              <img src="../assets/img/utility/50mm.png" alt="">
              Yongnuo 50mm 1.8</a>
            </li>
            <li>
              <a href="https://articulo.mercadolibre.com.co/MCO-523556426-flash-yongnuo-speedlite-yn685-ttl-para-nikon-_JM" target="_blank">
              <img src="../assets/img/utility/flashyongnuo.png" alt="">
              Flash Yongnuo 685</a>
            </li>
            <li>
              <a href="https://articulo.mercadolibre.com.co/MCO-457128417-control-disparador-de-flash-yongnuo-622tx-ttl-para-nikon-_JM" target="_blank">
              <img src="../assets/img/utility/yn622.png" alt="">
              Flash Controller Yongnuo YN 622TX</a>
            </li>
             <li>
               <a href="https://store.hp.com/co-es/default/portatil-hp-15-da0011la-3px36la.html" target="_blank">
              <img src="../assets/img/utility/hp15.png" alt="">
              HP 15-da0011la</a>
            </li>
            <li>
              <a href="https://articulo.mercadolibre.com.co/MCO-545916745-memoria-micro-sd-64gb-samsung-evo-select-100mbs-sdxc-_JM" target="_blank">
              <img src="../assets/img/utility/sd.png" alt="">
              Memoria Micro Sd 64gb Samsung Evo</a>
            </li>
            <li>
              <a href="https://articulo.mercadolibre.com.co/MCO-490145211-steadycam-s40-estabilizador-de-camara-_JM" target="_blank">
              <img src="../assets/img/utility/s40.png" alt="">
              SteadyCam s40</a>
            </li>
          </ul>
        </div>
      </div>
      </transition>
      
    </div>
    <div class="column-acerca-dos">
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herramientas: false
    }
  },
  methods: {
    showHerram() {
      if (!this.herramientas) {
        this.herramientas = true
      }
    },
    hideHerram() {
      if (this.herramientas) {
        this.herramientas = false
      }
    }
  }
}
</script>

<style scoped>
/*  animacion view router */
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}


.button-close {
    transition: all .3s ease;
    position:absolute;
    right:10px;
    top:10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.button-close:hover {
   
    transform: rotate(90deg);
}
.herram ul li img {
  max-width: 100%;
  height:120px;
  margin-bottom: 10px;
  object-fit: contain;
}
.herram ul li {
  padding:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}
.herram ul li a:hover {
  transform: scale(1.1);
}
.herram ul li a {
  transition: all .2s ease;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
  color: rgb(112, 126, 111);
  font-family: 'montserratregular';
  text-decoration: none;
}
.herram ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  /* justify-content: center; */
  overflow-y: auto;
  height: 100%;
  padding:20px;
  box-sizing: border-box;
}
.herram {
  width:80%;
  margin: 40px 30px;
  /* padding: 20px; */
  background: #F2F2F2;
  border-radius: 15px;
  box-sizing: border-box;
  height: 80%;
  /* background: red; */
}
.herramientas-de-trabajo {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .7);
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow-x: hidden;
  /* justify-content: center; */
  overflow-y: auto;
  z-index: 9999999;
  display: flex;
  justify-content: center;
}
.container-acerca {
  width: 100%;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
.column-acerca-uno {
  padding: 0 5rem 0 5rem;
  width: 60%;
  height: 100vh;
  /* background: red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
}
.hash {
  text-decoration: none;
  color: #81927F;
}

.herramientas {
  font-family: 'montserratregular';
  line-height: 20px;
  /* margin-bottom: 30px; */
  color: #81927F;
  border: 1px solid #81927F;
  width: auto;
  margin: 0px 0px;
  padding:10px 25px;
  border-radius: 150px;
  cursor: pointer;
  transition: all .3s ease;
}
.herramientas:hover {
  background: #81927F;
  color: #F2F2F2;
}



.column-acerca-dos {
  width:40%;
  height:100vh;
}

.column-acerca-dos .image {
  width:100%;
  height:100%;
  background:url("../assets/img/utility/ilustracion.jpg");
  background-position: center center;
  background-size: cover;
}
.column-acerca-uno h1 {
  font-family: 'montserratregular';
  font-weight: 100;
  margin-bottom:20px;
  margin-top:50px;
  color:var(--colorp);
}

.column-acerca-uno hr {
  width: 25%;
  margin-bottom:20px;
  color:var(--colorp);
  background: var(--colorp);
  border-top: 2px solid #81927F;
  
}
.column-acerca-uno p {
  font-family: 'montserratregular';
  line-height: 20px;
  margin-bottom: 20px;
}
.column-acerca-uno h3  {
  font-family: 'montserratregular';
  font-weight: 100;
  color: var(--colorp);

}
.acerca_redes ul {
  display: flex;

}
.acerca_redes ul li {
  list-style: none;
}
.acerca_redes ul li a img {
  width:30px;
  height: 30px;
  margin-top: 20px;
  margin-right:15px;
}


@media screen and (max-width:1250px) {
  .column-acerca-uno {
    padding: 0rem 2rem 5rem 2rem;
  }
  .container-acerca {
    flex-direction: column;
  }
  .column-acerca-uno {
    padding: 0rem 2rem 5rem 2rem;
    width: 100%;
    height: auto;
    box-sizing: border-box;
  }
  .column-acerca-dos {
    width: 100%;
    height: 100vh;
  }
}

@media screen and (max-width:1024px) {
  .container-acerca {
    flex-direction: column;
  }
  .column-acerca-uno {
    padding: 2rem 2rem 5rem 2rem;
    width: 100%;
    height: auto;
    box-sizing: border-box;
  }
  .column-acerca-dos {
    width: 100%;
    height: 100vh;
  }
  .column-acerca-dos .image {
    width:100%;
    height:100%;
    background:url("../assets/img/utility/ilustracion.jpg");
    background-position: center center;
    background-size: cover;
  }
}

</style>