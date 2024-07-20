<template>
    <div id="nav">
        <nav :class="{ sticky: nav }" class="fixed top-0 flex w-full px-8 py-4 z-50 bg-transparent md:px-12 lg:px-16">
            <div class="w-full h-full flex justify-between items-center">
                <a href="#">
                    <RouterLink :to="{ name: 'home' }">
                            <img src="@/assets/images/logo.svg" alt="JagTrim International" class="h-12">
                        
                    </RouterLink>
                </a>
                <ul class="hidden justify-center space-x-12 font-medium md:flex">
                    
                    <li><RouterLink :to="{ name: 'collection' }" class="line relative inline-block" >Our Collection</RouterLink></li>

                    <li><RouterLink :to="{ name: 'sustainability' }" class="line relative inline-block" >Sustainability</RouterLink></li>
                    
                    <li><RouterLink :to="{ name: 'contact' }" class="line relative inline-block">Contact Us</RouterLink></li>
                </ul>
                <div id="toggle" class="right-10 flex justify-center items-center w-12 h-12 rounded-full z-40 cursor-pointer transition duration-150 md:hidden">
                    <div class="menu-icon" @click="toggleMenu">
                        <span class="bg-black"></span>
                        <span class="bg-black"></span>
                        <span class="bg-black"></span>
                    </div>
                </div>
                <div id="menu" v-if="menu" class="fixed inset-0 h-screen w-full text-black bg-white text-xl z-30 pl-16 ease-in duration-200 md:hidden">
                <!-- <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-80 -z-10"></div> -->
                <ul id="links" class="h-full flex flex-col justify-center items-start space-y-8 text-4xl text-black z-10">
                    <li @click="toggleMenu" class="relative table-cell"><RouterLink :to="{ name: 'collection' }"  class="relative inline-block py-2">Our Collection</RouterLink></li>
                    <li @click="toggleMenu" class="relative table-cell"><RouterLink :to="{ name: 'sustainability' }"  class="relative inline-block py-2">Sustainability</RouterLink></li>
                    <li @click="toggleMenu" class="relative table-cell"><RouterLink :to="{ name: 'contact' }" class="relative inline-block py-2">Contact Us</RouterLink></li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav: false,
            menu: false,
        }
    },
    created() {
        window.addEventListener("scroll", this.scroll)
    },
    methods: {
        scroll() {
            if (window.scrollY > 0) {
                this.nav = true
            } else {
                this.nav = false
            }
        },
        toggleMenu() {
            if (document.querySelector(".menu-icon").classList.contains("open")) {
                document.querySelector(".menu-icon").classList.remove("open")
            } else {
                document.querySelector(".menu-icon").classList.add("open")
            }

            if (!this.menu) {
                this.menu = true
            } else {
                this.menu = false
            }
        },
    }

}
</script>

<style scoped>
.sticky {
    background: rgba(255, 255, 255, 1);
    transition: background 0.3s ease;
    position: fixed;
}

nav:hover {
    background: rgba(255, 255, 255, 1);
    transition: background 0.3s ease;
}

.line:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 1.5px;
  border-radius: 0.6px;
  left: 50%;
  position: absolute;
  background: rgb(0 0 0);
  transition: width 0.4s ease 0s, left 0.4s ease 0s;
  width: 0;
}

.line:hover:after {
  width: 100%;
  left: 0;
}

.menu-icon {
  width: 25px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}
.menu-icon span {
  display: block;
  position: absolute;
  height: 2.5px;
  width: 100%;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
.menu-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
.menu-icon span:nth-child(2) {
  top: 8px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
.menu-icon span:nth-child(3) {
  top: 16px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
.menu-icon.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  left: 3.8px;
}
.menu-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}
.menu-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 18px;
  left: 3.8px;
}
</style>