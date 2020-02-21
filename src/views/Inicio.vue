<template>
  <div class="container">
    <div class="c-none">
      <transition name="slide-fade" mode="out-in">
        <div class="slide" :key="this.backG" :style="`background-image: url('${backG}')`"></div>
      </transition>
      <div @click="nextImage" class="next">
        <img class="image-slider" src="../assets/img/utility/arrow.svg" alt="">
      </div>
      <div @click="prevImage" class="prev">
          <img class="image-slider" src="../assets/img/utility/arrow.svg" alt="">
      </div>
    </div>
    <div class="c-none-mobile">
      <div  class="images-responsive">
        <img class="logo-res" src="../assets/img/utility/Logo.png" alt="">
        <img class="images-res" src="../assets/img/slide/slide2.jpg" alt="">
        <img class="images-res" src="../assets/img/slide/slide1.jpg" alt="">
        <img class="images-res" src="../assets/img/slide/slide3.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: 0,
      backG: require('../assets/img/slide/slide1.jpg'),
      backUrl: [
         require('../assets/img/slide/slide1.jpg'),
         require('../assets/img/slide/slide2.jpg'),
         require('../assets/img/slide/slide3.jpg')
      ]
    }
  },
  methods: {
    nextImage() {
      
      if (this.model == 2) {
        this.model = 0
        this.backG = this.backUrl[0]
      } else {
        this.model++
        this.backG = this.backUrl[this.model]
      }
     console.log(this.model)
    },

    prevImage() {
      this.model--
      this.backG = this.backUrl[this.model]
      
      if (this.model < 0) {
        this.model = 2
        this.backG = this.backUrl[this.model]
      } 
      
    console.log(this.model);
    
  }
  },
  mounted() {
    let container = document.querySelectorAll(".container")
      container[0].addEventListener('contextmenu', function (e) {
        // document.body.innerHTML += '<p>Right-click is disabled</p>'
        e.preventDefault();
      }, false);
  }
}
</script>
<style scoped>

.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all .3s linear;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}


.container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.prev {
  top:48%;
  left: 20px;
}
.prev img {
  transform: rotate(180deg);
}
.next img {
  transform: rotate(0deg);
}
.next {
  top: 48%;
  right: 20px;
}
.next, .prev {
  transition: all .2s ease-in-out;
  position: absolute;
  width: 30px;
  height: 30px;
  cursor:pointer;
}
.next:hover, .prev:hover {
  transform: scale(1.2);
}
.slide {
  background-size: cover;
  position: relative;
  background-position: center center !important;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-repeat: no-repeat;
}

/* .image-slider {
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.75);
box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.75);
} */

.slide img {
  position: absolute;
  height: 100vh;
  top: 0%;
  left: 0%;
}
.images-responsive {
  display: none;
}

@media screen  and (max-width: 1000px) {
  .c-none {
    display: none;
  }
  .c-none-mobile {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .images-responsive {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .logo-res {
    margin:20px auto;
  }
  .images-responsive .images-res {
    width: 100%;
    display: block;
    height: 33.4%;
    object-fit: cover;
  }
  
}
</style>