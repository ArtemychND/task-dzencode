<template>
  <div class="sidebar">
    <div class="sidebar__user-photo">
      <img src="@/assets/img/user-icon.png" alt="user-img" />
    </div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/">Products</router-link></li>
        <li><router-link to="/orders">Orders</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 20%;
  height: calc(100vh - 80px);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.25);
}

.sidebar__user-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sidebar__user-photo {
  flex: 1 1 30%;
}
.navigation {
  text-align: center;
  flex: 1 1 40%;
}
.navigation li {
  cursor: pointer;
  padding-bottom: 10px;
  margin: 15px 0;
  border-bottom: 3px solid #fff;
  /* transition: border-bottom 1s linear; */
}
.navigation li:hover {
  border-bottom: 3px solid #48C50E;
  transition: border-bottom .5s linear;
}
</style>