<template>
  <div class="product" @click="deleteProduct">
    <div class="product__image">
      <img :src="product.photo ? require('../assets/img/monitor.png') : ''" :alt="product.photo">
    </div>
    <div class="product__name">
      <p>{{ product.title }}</p>
      <span>{{ product.serialNumber }}</span>
    </div>
    <div class="product__condition">
      {{ product.isNew ? 'New' : 'Used' }}
    </div>
    <div class="product__guarantee">
      <p>from {{ product.guarantee.start }}</p>
      <p>to {{ product.guarantee.end }}</p>
    </div>
    <div class="product__price">
      <span>{{ `${product.price[0].value}  ${product.price[0].symbol}` }}</span>
      <p>{{ `${product.price[1].value}  ${product.price[1].symbol}` }}</p>
    </div>
    <div class="product__date">
      {{ product.date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },

  methods: {
    deleteProduct() {
      this.$root.$emit('productShow', this.product)
    }
  }
}
</script>

<style scoped>
.product {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background-color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.product:hover {
  cursor: pointer;
  transition: all .2s linear;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
}

.product__image {
  max-width: 70px;
}

.product span {
  color: #a9a9a9
}
</style>