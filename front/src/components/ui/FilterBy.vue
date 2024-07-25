<template>
  <div class="filter">
    <div class="filter__by">
      <label for="type">Type:</label>
      <select name="type" id="type" @change="setFilter">
        <option v-for="(el, i) in filter.type" :key="'type' + i" :value="el">{{el}}</option>
      </select>
    </div>
    <div class="filter__by">
      <label for="specification">Specification:</label>
      <select name="specification" id="specification" @change="setFilter">
        <option v-for="(el, i) in filter.specification" :key="'specification' + i" :value="el">{{el}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['set-filter'],
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  methods: {
    setFilter(e) {
      this.$emit('set-filter', e.target.value)
    }
  }
}
</script>

<style scoped>
.filter,
.filter__by {
  display: flex;
  align-items: center;
}
.filter {
  margin: 50px 0;
}
.filter__by {
  margin: 0 20px;
}
.filter__by label {
  color: #a9a9a9;
  margin-right: 15px;
}
.filter__by select {
  width: 250px;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
}
</style>