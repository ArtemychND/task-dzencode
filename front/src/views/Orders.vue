<template>
  <div class="orders">
    <div class="orders__title" v-if="getData.length">
      <h2>Orders / {{ getData.length }}</h2>
      <FilterBy :filter="{ specification, type }" />
    </div>
    <div class="orders__wrapper">
      <div
        class="orders__list"
        :style="{ width: active.squeezeOrders ? '30%' : '100%' }"
      >
        <OrderItem
          v-for="order in getData"
          :key="order.id"
          :order="order"
          :active="active"
          @squeeze="openSubCategory"
        />
      </div>
      <div class="orders__product" v-if="active.squeezeOrders && products">
        <div class="close-block">
          <div class="close-btn" @click="closeProducts">&times;</div>
        </div>
        <ProductItem v-for="prod in products" :key="prod.id" :product="prod" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterBy from "../components/ui/FilterBy.vue";
import ProductItem from "@/components/ProductItem.vue";
import OrderItem from "@/components/OrderItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    FilterBy,
    OrderItem,
    ProductItem,
  },
  data() {
    return {
      active: {
        activeOrder: null,
        squeezeOrders: false,
      },
    };
  },
  computed: {
    ...mapGetters(["getData"]),

    products() {
      if (this.active.activeOrder) {
        return this.getData[this.active.activeOrder - 1].products;
      } else {
        return undefined;
      }
    },

    specification() {
      return (
        this.getData.length &&
        this.getData.reduce((arr, el) => {
          arr.push(...el.products.map((i) => i.specification));
          return arr;
        }, [])
      );
    },
    type() {
      return (
        this.getData.length &&
        this.getData.reduce((arr, el) => {
          arr.push(...el.products.map((i) => i.type));
          return arr;
        }, [])
      );
    },
  },

  methods: {
    openSubCategory(id) {
      this.active.activeOrder = id;
      this.active.squeezeOrders = true;
    },

    closeProducts() {
      this.active.activeOrder = null;
      this.active.squeezeOrders = false;
    }
  },
  async mounted() {
    this.$store.dispatch("askForData", "orders");
  },
};
</script>

<style scoped>
.orders__wrapper {
  display: flex;
}

.orders__list {
  transition: width 0.2s linear;
}

.orders__product {
  position: relative;
  margin-left: 10px;
  padding: 20px;
  background-color: #fff;
}

.close-block {
  font-size: 30px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 1);

  position: absolute;
  top: -25px;
  right: -25px;
  z-index: 50;
}
</style>