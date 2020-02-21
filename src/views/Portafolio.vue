<template>
  <div class="container">
    <transition name="fade">
      <div class="lightbox" :key="this.imagelightbox"   v-show="showImageSelect">
          <div class="image-size">
                <img class="imagelightbox" oncontextmenu='return false' ondragstart='return false' onmousedown='return false' onselectstart='return false' ref="imagedata" v-show="imagelightbox"  :key="this.imagelightbox" :src="require(`../assets/img/portafolio/${this.imagelightbox}.jpg`)" alt="">
          </div>
         
          <div class="info">
              <h1> {{ idxtitle.name }}</h1>
              <div class="container-info">
                <ul>
                  <li>
                    <img src="../assets/img/utility/camara.svg" alt="">
                    <p id="modelo">Modelo: </p>
                  </li>
                  <li>
                    <img src="../assets/img/utility/lente.svg" alt="">
                    <p id="lente">Lente: </p>
                  </li>
                  <li>
                    <img src="../assets/img/utility/apertura.svg" alt="">
                    <p id="apertura"> Apertura: </p>
                  </li>
                  <li>
                    <img src="../assets/img/utility/velocidad.svg" alt="">
                    <p id="velocidad"> Velocidad:  </p>
                  </li>
                  <li>
                    <img src="../assets/img/utility/iso.svg" alt="">
                    <p id="iso">Iso: </p>
                  </li>
                </ul>
              </div>
              
          </div>
          <div class="close-button" @click="closeLight">
              <img src="../assets/img/utility/cerrar.svg" alt="">
          </div>
      </div>
    </transition>
    <div class="filter">
      <ul class="type-filter-mobile" id="type-filter-mobile">
        
        <div :class="`type li-${idx}`" v-for="(type, idx) in types" :key="idx">
          <li @click="filtrar(type.type)"> {{ type.type }} </li>
        </div>
      </ul>
    </div>
    <div class="gallery" id="mansory">
        <div @click="showImage(idx)" oncontextmenu='return false' ondragstart='return false' onmousedown='return false' onselectstart='return false' v-for="(item, idx) in items" :key="idx" :class="`gallery-item ${item.type[1]}`">
          <img class="itemsdata" :src="require(`../assets/img/portafolio/${item.url}.jpg`)" alt=""/>
          <div class="overlay">
            <h1>{{ item.name }}</h1>
            <div class="bar_type">
              {{ item.type[1] }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

const EXIF = require('exif-js')

import Images from '../assets/js/images'

export default {
  components: {
    // Imagedetail
  },
  data () {
    return {
      types: [
        { type: 'Todo' },
        { type: 'Stock' },
        { type: 'Retrato' },
        { type: 'Independiente' }
      ],
      idxtitle: 0,
      imagelightbox: 'retratomoni3',
      showImageSelect: false,
      items: Images,
      filterM: false
    }
  },
  
  methods: {
    showImage(idx) {
      console.log(idx)
      this.showImageSelect = true
      // console.log(this.items[idx].url);
      if (!this.items[idx].url) {
        return {}
      }

      this.imagelightbox = this.items[idx].url
      this.idxtitle = this.items[idx]
  
      console.log(this.showImageSelect);
      
      setTimeout(() => {
         console.log('onChange!')
              
            let image = this.$refs.imagedata
              
              if (image) {
                  EXIF.getData(image, function() {
                    
                     if (this.exifdata) {

                      const dataexif = this.exifdata 
                      console.log(dataexif);
                      
                      let model = EXIF.getTag(this, "Model")
                      let apertura = EXIF.getTag(this, "FNumber")
                      let velocidad = EXIF.getTag(this, "ExposureTime")
                      let iso = EXIF.getTag(this, "ISOSpeedRatings")
                      let lente = EXIF.getTag(this, "FocalLength")
                      // let model = EXIF.getTag(this, "Model");
                      console.log(apertura);
                      
                      let infomodelo = document.getElementById("modelo")
                      let infoapertura = document.getElementById("apertura")
                      let infovelocidad = document.getElementById("velocidad")
                      let infoiso = document.getElementById("iso")
                      let infolente = document.getElementById("lente")

                      infomodelo.innerHTML = ` <span> ${model} </span>`
                      infolente.innerHTML = ` <span> ${lente} mm </span>`
                      infoapertura.innerHTML = ` <span>ƒ/ ${apertura} </span>`
                      infovelocidad.innerHTML = ` <span> ${  velocidad.numerator } / ${velocidad.denominator} s </span>`
                      infoiso.innerHTML = ` <span> ${iso} </span>`


                     } else {
                       return {}
                     }
                      
                  })
              } else {
                  console.log(`it's not image`)
              }
      }, 500);
    },
    
    closeLight() {
            this.showImageSelect = false
    },
    filtrar(type) {
      // console.log(type);
      let item = document.querySelectorAll('.gallery-item')
      switch (type) {
        case 'Todo': 
            // console.log(item);
            for (let i = 0; i < item.length; i++) {
              item[i].classList.remove('filtro-gallery')
            }
          break;
        case 'Stock': 
            
            for (let i = 0; i < item.length; i++) {
             if (!item[i].classList.contains("Stock")) {

               item[i].classList.add('filtro-gallery')
             } else {
               
               item[i].classList.remove('filtro-gallery')
             }
            }
          
          break;
        case 'Retrato':

          for (let i = 0; i < item.length; i++) {
             if (!item[i].classList.contains("Retrato")) {

               item[i].classList.add('filtro-gallery')
             } else {
               
               item[i].classList.remove('filtro-gallery')
             }
          }
          break;
        case 'Independiente':
          for (let i = 0; i < item.length; i++) {
             if (!item[i].classList.contains("Independiente")) {

               item[i].classList.add('filtro-gallery')
             } else {
               
               item[i].classList.remove('filtro-gallery')
             }
          }
          
          break;
            
      
        default:
          break;
      }
      
    }
  
  },
  mounted() {
    function mansoryLayout (containerElem, itemsElems, columns) {
        containerElem.classList.add('mansory-layout', `columns-${columns}`)
        const columnsElements = []
        for(let i = 1; i <= columns; i++) {
          let column = document.createElement('div')
          column.classList.add('mansory-column', `column-${i}`)
          containerElem.appendChild(column)
          columnsElements.push(column)
        }
        
        for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
          for(let n = 0; n < columns; n++) {
            let item = itemsElems[m * columns + n]
             if (item) {
                columnsElements[n].append(item)
             }
            
            // columnsElements[n].innerHTML(item)
            if (item) {
              item.classList.add('mansory-items')
            }
            
          }
        }
      }
      
      const windWidth = window.matchMedia("(max-width: 900px)") 
     

      function mansoryQuery(windWidth) {
        
        if (windWidth.matches) {
          mansoryLayout(document.getElementById('mansory'),document.querySelectorAll('.gallery-item'), 2)
        } else {
          mansoryLayout(document.getElementById('mansory'),document.querySelectorAll('.gallery-item'), 3)
        }
      }
      mansoryQuery(windWidth)
      
  

      }
    }
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
  /* transform: translateY(10px); */

}



.container img {
  max-width: 100%;
  display: block;
  width: 100%;
  
}
.container {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 1s ease; 
  opacity: 1;
}

.overlay {
  transition: all .3s ease-in-out;
  /* transform: translateY(100%); */
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0; 
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0,0,.5);

}

.overlay h1 {
  font-family: 'montserratlight';
  font-weight: 100;
  font-size: 23px;
  text-align: center;
}
.bar_type {
  opacity: 0;
  margin: 0;
  padding: 0px 15px;
  position: absolute;
  width: auto;
  height: 27px;
  background: black;
  bottom:20px;
  border-radius: 8px;
  color:#F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: var(--mont);
  transform: translateX(20%);
  transition: all .3s ease-in-out;
}

.gallery-item:hover .overlay .bar_type {
  opacity: 1;
  transform: translateX(0%);
  /* transform: translateY(0%); */
}

.gallery-item:hover .overlay {
  opacity: 1;
  visibility: visible;
  /* transform: translateY(0%); */
}
.gallery-item:hover .overlay h1 {
  opacity: 1;
  transform: translateY(0%);
}
.overlay h1 {
  opacity: 0;
  transition: all .3s ease-in-out;
  color:#F2F2F2;
  transform: translateY(50%);
  font-family: 'montserratlight';
  font-weight: 100;
}


.mansory-layout {
  width: 100%;
  --column: 3;
  --gap:1rem;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: var(--gap);
}
.mansory-layout .mansory-items {
  margin-bottom: 1rem;
}
.mansory-layout.columns-1 {
  --columns: 1;
}
.mansory-layout.columns-2 {
  --columns: 2;
}
.mansory-layout.columns-3 {
  --columns: 3;
}
.mansory-layout.columns-4 {
  --columns: 4;
}


.lightbox {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    color:white;
    overflow: auto;
    background: rgba(0, 0,0,.8);
    z-index: 999999999;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.fade-tran {
  transition: all .5s ease;
  opacity: 0;
  transform: translateY(100%);
}
.imagelightbox {
    transition: all .5s ease;
    width: 100%;
    object-fit: contain;
    height: 93%;
    position: absolute;
}
.image-size {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
}

.lightbox .info {
    box-sizing: border-box;
    font-family: 'montserratlight';
    font-weight: 100;
    background: #0F0F0F;
    min-height:  auto;
    width: 70%;
    margin: 0px 0px 30px 0px;
    padding:25px;
    border-radius: 15px;
}
.info ul li {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin:30px;
}
.info ul  {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
.info ul li img {
  width: 40px;
  margin:0px 15px 15px 15px;
}
.info span {
  font-family: 'montserratlight' !important;
    font-weight: 100 !important;
}
.info h1 {
  margin-bottom: 15px;
  text-align: center;
}
.close-button {
    transition: all .3s ease;
    position:absolute;
    right:20px;
    top:20px;
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.close-button:hover {
   
    transform: rotate(90deg);
}


.filter ul {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}
.filter ul  li {
  position: relative;
  list-style: none;
  margin:15px;
  padding:5px;
  font-size: 17px;
  font-family: 'montserratregular';
  /* font-weight: 500; */
  cursor:pointer;
  color: #0F0F0F;
}
.filter ul  li:hover::after {
  transition: all .3s ease-in-out;
  content: '';
  position: absolute;
  background: #81927F;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  
}



.filter ul  li:after {
  transition: all .3s ease-in-out;
  content: '';
  position: absolute;
  background: #81927F;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  
}


.filtro-gallery {
    transition: all 1s ease; 
    height: 0;
    margin: 0 !important;
    padding: 0;
    opacity: 0;
}



@media screen and (max-width: 1000px) {

  ul::-webkit-scrollbar {
    display: none;
  }
.image-size {
  min-height: 80vh;
}
.info h1 {
  margin-bottom: 15px;
  font-size: 25px;
  text-align: center;
}
.lightbox .info {
    box-sizing: border-box;
    font-family: 'montserratlight';
    font-weight: 100;
    background: #0F0F0F;
    min-height:  auto;
    width: 90%;
    margin: 0px 0px 30px 0px;
    padding:25px;
    border-radius: 15px;
}
  
.filter ul {
  position: absolute;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  z-index: 999;
  
  justify-content: flex-start;
  flex-wrap:nowrap;
  
  /* box-sizing: content-box; */
  
}
.filter { 
  position: relative;
  width: 100%;
  height: 60px;
  /* margin-bottom: 15px; */
  
 }
 
/* .filter ul li {
  margin: 22px 13px;
} */
.filter ul .li-0 {
  padding-left: 70px;
}


 .container {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
}


}

</style>