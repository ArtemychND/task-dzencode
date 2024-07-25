<template>
  <div class="products" v-if="getData && getData.length">
    <div class="products__title" v-if="getData.length">
      <h2>Products / {{ getData.length }}</h2>
      <FilterBy :filter="{ specification, type }" @set-filter="applyFilter" />
    </div>
    <div class="products__list">
      <ProductItem v-for="prod in products" :key="prod.id" :product="prod" />
    </div>
  </div>
</template>

<script>
import FilterBy from "../components/ui/FilterBy.vue";
import ProductItem from "@/components/ProductItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    FilterBy,
    ProductItem,
  },
  data() {
    return {
      filtered: null
    }
  },
  computed: {
    ...mapGetters(["getData"]),

    products() {
      return this.filtered ? this.getData.filter((el) => el.type == this.filtered || el.specification == this.filtered) : this.getData
    },

    specification() {
      return this.getData.length && this.getData.map((el) => el.specification);
    },
    type() {
      return this.getData.length && this.getData.map((el) => el.type);
    },
  },
  methods: {
    applyFilter(value) {
      this.filtered = value;
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