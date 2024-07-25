<template>
  <div class="order" @click="openSubCategory" :class="{active: active.activeOrder == order.id}">
    <div class="order__name" :style="{display: active.activeOrder ? 'none' : 'block'}">
      {{ order.title + order.description }}
    </div>
    <div class="order__products">
      <div class="order__icon">
        <img src="@/assets/img/list-icon.png" alt="icon-list">
      </div>
      <div class="order__amount">
        <p>{{ order.products.length }}</p>
        <span>Products</span>
      </div>
    </div>
    <div class="order__date">
      {{ order.date }}
    </div>
  </div>
</template>

<script>
export default {
  emits: ['squeeze'],
  props: {
    order: {
      type: Object
    },
    active: {
      type: Object
    }
  },

  computed: {

  },

  methods: {
    openSubCategory() {
      this.$emit('squeeze', this.order.id);
    }
  }
}
</script>

<style scoped>
.order {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background-color: #fff;
  padding: 5px 35px 5px 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.order.active::after {
  content: '';
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  background: url('../assets/img/open.png') 50% 0 no-repeat;
  background-size: contain;
}

.order:hover {
  cursor: pointer;
  transition: all .2s linear;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
}

.order__products {
  display: flex;
  align-items: center;
}
.order__icon {
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 10px;
}
.order__amount span {
  color: #a9a9a9
}
</style>