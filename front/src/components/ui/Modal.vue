<template>
  <div class="modal">
    <div class="container">
      <div class="modal__content">
        <div class="modal__close">
          <div class="close-modal" @click="$emit('close')">&times;</div>
        </div>
        <div class="modal__wrapper">
          <div class="modal__title">
            <h3>Are you sure you want to delete this product?</h3>
          </div>
          <div class="modal__element">
            <div class="product__image">
              <img
                :src="element.photo ? require('@/assets/img/monitor.png') : ''"
                :alt="element.photo"
              />
            </div>
            <div class="product__name">
              <p>{{ element.title }}</p>
              <span>{{ element.serialNumber }}</span>
            </div>
          </div>
        </div>
        <div class="modal__control">
          <div class="btns">
            <button @click="$emit('close')">Cancel</button>
            <button @click="deleteProduct">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    element: {
      type: Object,
    },
  },
  methods: {
    deleteProduct() {
      this.$store.dispatch('askForData', this.element);
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  z-index: 200;
}

.modal__content {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 80%;
  height: auto;
  background: #fff;
  color: var(--text-others);
  font-size: 20px;
}

.close-modal {
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

  position: fixed;
  top: 0;
  left: 100%;
  z-index: 50;
  transform: translate(-50%, -50%);
}

.modal__wrapper {
  padding: 20px 15px;
}

.modal__title {
  margin: 15px 0;
}

.modal__element {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  background-color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.product__image {
  max-width: 70px;
}

.product span {
  color: #a9a9a9;
}

.modal__control {
  padding: 50px 20px;
  background-color: #85bc47;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.btns button {
  padding: 15px 25px;
  font-size: 25px;
  color: #fff;
  background: inherit;
  margin: 0 20px;
  border-radius: 25px;
}
.btns button:hover {
  transition: all 0.2s linear;
  background: #fff;
  color: red;
}
</style>