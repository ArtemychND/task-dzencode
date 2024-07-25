<template>
  <div class="products">
    <div class="products__title" v-if="getData.length">
      <h2>Products / {{ getData.length }}</h2>
      <FilterBy :filter="{specification, type}" />
    </div>
    <div class="products__list">
      <ProductItem v-for="prod in getData" :key="prod.id" :product="prod"/>
    </div>
  </div>
</template>

<script>
import FilterBy from '../components/ui/FilterBy.vue';
import ProductItem from '@/components/ProductItem.vue'
import { mapGetters } from "vuex";

export default {
  components: {
    FilterBy,
    ProductItem
  },
  computed: {
    ...mapGetters(["getData"]),

    specification() {
      return this.getData.length && this.getData.map(el => el.specification)
    },
    type() {
      return this.getData.length && this.getData.map(el => el.type)
    },
  },
  async mounted() {
    this.$store.dispatch("askForData", "products");
  },
};
</script>

<style scoped>
.products__title {
  display: flex;
  align-items: center;
}
</style>