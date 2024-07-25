<template>
  <div id="app">
    <TopMenu />
    <main>
      <NavigationMenu />
      <div class="content-view">
        <router-view></router-view>
      </div>
    </main>
      <!-- If I use Vue 3 syntaxis I used <teleport></teleport> and dialog-->
      <!-- Thats my solution in Vue2 -->
    <Modal v-if="modalVisibility" @close="modalVisibility = false" :element="element" />
  </div>
</template>

<script>
import TopMenu from '@/components/layouts/TopMenu.vue';
import NavigationMenu from '@/components/NavigationMenu.vue'
import Modal from '@/components/ui/Modal.vue'

export default {
  components: {
    TopMenu,
    NavigationMenu,
    Modal
  },
  data() {
    return {
      element: null,
      modalVisibility: false
    }
  },
  created() {
    this.$root.$on('productShow', (data) => {
      this.element = data;
      this.modalVisibility = true;
    })
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

main {
  display: flex;
}

img {
  width: 100%;
  height: auto;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
  color: #000;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}

.container {
  padding: 0 50px;
}

.content-view {
  width: 100%;
  padding: 20px 20px 20px 50px;
  margin: 5px;
  background-color: #F0F3F5;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
