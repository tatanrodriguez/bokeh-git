<template>
  <div id="app">
    <div class="button-menu">
      <div class="bar-menu">
        <input type="checkbox" id="btn">
        <label for="btn" class="boton" @click="openMenu">
          <div class="barra"></div>
        </label>
      </div>
    </div>
    <div class="container_home">
      <div class="column column_nav" id="nav">
        <div class="nav">
          <img class="logo" src="./assets/img/utility/Logo.png" alt="">
          <nav>
            <ul>
              <li class="nav_items" @click="closeMenu">
                <router-link  class="link_menu" to="/" exact> 
                  Inicio
                </router-link>
              </li>
              <li class="nav_items" @click="closeMenu">
                <router-link  class="link_menu" to="/portafolio">
                  Portafolio
                </router-link>
              </li>
              <li class="nav_items" @click="closeMenu">
                <router-link  class="link_menu" to="/acerca">
                  Conócenos
                </router-link>
              </li>
              <li class="nav_items" @click="closeMenu">
                <router-link  class="link_menu" to="/contacto">
                  Contacto
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="social_media">
            <ul>
              <li>
                <a href="https://www.instagram.com/bokeh.fotografia/" target="_blank">
                  <img src="./assets/img/utility/instagram.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bokehfotografia.col" target="_blank">
                  <img src="./assets/img/utility/facebook.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/bokehfotografiacol" target="_blank">
                  <img src="./assets/img/utility/behance.svg" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>


      

export default {
  methods: {

    openMenu() {
      let button = document.getElementById("btn")
      // console.log('hol');
      if (!button.checked) {
        // console.log('no');
        document.getElementById("nav").style.transform = "translateX(0%)"
      } else {
        document.getElementById("nav").style.transform = "translateX(-100%)"
      }
      
    },
    closeMenu() {
      const windWidth = window.matchMedia("(max-width: 900px)") 

      function closeNav(windWidth) {
        let button = document.getElementById("btn")
        if (windWidth.matches) {
          
          document.getElementById("nav").style.transform = "translateX(-100%)"
          button.checked = false
        } else {
          document.getElementById("nav").style.transform = "translateX(0%)"
          button.checked = true
        }       
      }

      closeNav(windWidth)

    }
  },
  mounted() {
    const windWidth = window.matchMedia("(max-width: 1000px)")

    function menu(windWidth) {
        let button = document.getElementById("btn")
        if (windWidth.matches) {
          console.log('dejar menu');
          
          // mansoryLayout(document.getElementById('mansory'),document.querySelectorAll('.gallery-item'), 2)
        } 
        else {
          console.log('quitar');
          
            document.getElementById("nav").style.transform = "translateX(0%)"
          button.checked = true
          
          // mansoryLayout(document.getElementById('mansory'),document.querySelectorAll('.gallery-item'), 3)
        }
      }
      menu(windWidth) 
      windWidth.addListener(menu)

    
  }
}
</script>

<style>

/*  animacion view router */
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}


@font-face {
    font-family: 'montserratlight';
    src: url('./assets/fonts/montserrat-light-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


@font-face {
    font-family: 'montserratregular';
    src: url('./assets/fonts/montserrat-regular-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}



@font-face {
    font-family: 'montserratmedium';
    src: url('./assets/fonts/montserrat-medium-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}



* {
  --mont: 'montserratlight';
  --colorp: #81927F;
  padding:0;
  margin:0;
  
}

/*
 *  STYLE 2
 */

/*
 *  STYLE 1
 */

/* *::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: #F2F2F2;
}

*::-webkit-scrollbar
{
	width: 12px;
	background-color: #F2F2F2;
}

*::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color:#0F0F0F;
} */



.container_home {
  background-color: #F2F2F2;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 100% 100%;
  height: 100vh;
}

.column {
  background-color: #F2F2F2;
}
#nav {
  z-index: 9999;
  -webkit-box-shadow: 1px 0px 21px -10px rgba(15,15,15,1);
  -moz-box-shadow: 1px 0px 21px -10px rgba(15,15,15,1);
  box-shadow: 1px 0px 21px -10px rgba(15,15,15,1);
}
.nav {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:space-around;
  height: 100%;
  font-family: 'Montserratmedium';
}
.nav img {
  margin-top:20px;
  width:100%;
  max-width: 150px;
}
nav {
  text-align: center;
}

a.router-link-active {
  color:#81927F !important;
}
.nav_items .link_menu {
  font-family: 'montserratregular', sans-serif;
  display: block;
  padding:10px;
  margin: 10px 0px;
  text-decoration: none;
  color:#0F0F0F;
  font-size:18px;
}
.link_menu {
  position: relative;
  transition: all .3s ease-in-out;
}
.link_menu:hover {
  color:#81927F;
  position: relative;

}
a.router-link-active:after {
  left: 0%;
  width: 100%;
} 

.link_menu:hover:after {
  left: 0%;
  width: 100%;
}
.link_menu:after {
  transition: all .3s ease-in-out;
  content: '';
  position: absolute;
  background: #81927F;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
}
.nav_items {
  list-style: none;
}

.social_media ul {
  display: flex;
  justify-content: space-evenly;
}
.social_media ul li {
  list-style: none;
}
.social_media ul li a {
  margin:0px 10px;
}
.social_media ul li img {
  transition: all .2s ease-in-out;
  width:25px;
}

.social_media ul li a:hover img {
  transform: scale(1.2);
}

.button-menu {
  display:none;
}


@media screen and (max-width: 1000px) {
  .container_home {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 100% 100%;

  }
  #nav {
    position: absolute;
    transition: all .3s ease-in-out;
    width: 300px;
    height: 100vh;
    transform: translateX(-100%);
  }
  


  #btn {
    display:none;
  }
  .button-menu {
    justify-content: center;
    align-items: center;
    display: flex;
    position:fixed;
    width:45px;
    height: 35px;
    /* background: gray; */
    z-index: 9999999;
    left:8px;
    top: 10px;
    background: #F2F2F2;
    padding:10px;
    border-radius: 10px;
    cursor: pointer;

  }
  .bar-menu {
    width:100%;
    height: 100%;
    position: relative;
    cursor: pointer;
  }

  .boton {
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    /* border-radius: 50px; */
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* background: lightblue; */
  }

  .barra {
    position: relative;
    background:var(--colorp);
    height: 4px;
    width: 100%;
    border-radius: 25px;
    transform: rotateZ(0deg);
    transition: all .2s ease-in-out;
  }
  .barra::before, .barra::after {
    content: '';
    transition: all .2s ease-in-out;
    position: absolute;
    background: var(--colorp);
    height: 4px;
    width: 100%;
    border-radius: 25px;
  }
  .barra::before {
    top:-15px;
    transition: all .2s ease-in-out;
  }
 .barra::after {
   transition: all .2s ease-in-out;
    top:15px;
    transform:rotateZ(0deg);
  }
 
 #btn:checked ~ label > .barra {
  transition: all .2s ease-in-out;
  transform:rotateZ(45deg);
}
#btn:checked ~ label > .barra::after {
  /* background: blue; */
  transition: all .2s ease-in;
  top:0;
  transform:rotateZ(90deg);
}
#btn:checked ~ label > .barra::before {
  /* background: pink; */
  transition: all .2s ease-in-out;
  top:0;
  transform:rotateZ(90deg);
}






}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
