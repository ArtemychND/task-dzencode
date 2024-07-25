<template>
  <header class="topMenu">
    <div class="topMenu__wrapper">
      <div class="topMenu__content">
        <div class="topMenu__logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="topMenu__search">
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div class="topMenu__date" :key="oldTime">
        <div class="day">
          {{ new Date() | moment("dddd") }}
        </div>
        <div class="date-wrap">
          <div class="date">
            {{ new Date() | moment("DD, MMM  YYYY, kk:mm") }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      oldTime: new Date().toISOString(),
      interval: null
    }
  },

  created() {
    this.interval = setInterval(() => this.oldTime = new Date().toISOString(), 1000)
  }
}
</script>

<style scoped>
.topMenu {
  padding-left: 20%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

.topMenu__wrapper,
.topMenu__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topMenu__wrapper {
  padding: 15px 0;
}

.topMenu__content {
  width: 100%;
  max-width: 40%;
  flex: 1 1 80%;
}

.topMenu__logo {
  max-width: 50px;
}

.topMenu__search input {
  background-color: #f0f3f5;
  padding: 10px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.75);
}
.topMenu__search input::placeholder {
  font-weight: bold;
}
.topMenu__date {
  flex: 0 1 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>