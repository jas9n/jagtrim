<template>
    <div id="nav">
        <nav :class="{ sticky: nav }" class="fixed top-0 flex justify-between items-center w-full px-16 py-4 z-50 bg-transparent">
            <a href="#">
                <RouterLink :to="{ name: 'home', hash: '#landing' }">
                        <img src="@/assets/images/logo.svg" alt="JagTrim International" class="h-12">
                    
                </RouterLink>
            </a>
            <ul class="flex justify-center space-x-12 font-medium">
                <li><RouterLink :to="{ name: 'home', hash: '#about' }" class="line relative inline-block" >About</RouterLink></li>
                
                <li><RouterLink :to="{ name: 'home', hash: '#collection' }" class="line relative inline-block" >Collection</RouterLink></li>
                
                <li><RouterLink :to="{ name: 'contact' }" class="line relative inline-block">Contact</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav: false
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
</style>