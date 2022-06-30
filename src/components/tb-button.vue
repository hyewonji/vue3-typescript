<template>
  <div>
    <button
      class="btn meal-button tb-button"
      :class="[customClass, type, size, thin, { outline }, { danger }, {disable}]"
      @click="onclick"
      ><slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    customClass: String,
    type: {
      default: '',
      type: String,
    },
    outline: {
      default: false,
      type: Boolean,
    },
    disable: {
      default: false,
      type: Boolean,
    },
    size: {
      default: '',
      type: String,
    },
    thin: {
      default: '',
      type: String,
    },
    danger: {
      default: false,
      type: Boolean,
    },
    throttled: {
      default: false,
      type: Boolean,
    },
    throttleTime: {
      default: 1000,
      type: Number,
    },
  },
  setup(props, { emit }) {
    const isFirst = ref(true);
    const timeout = ref(null);

    function onclick(event: PointerEvent) {
      if (props.disable || timeout.value !== null) {
        event.stopPropagation();
        return;
      }
      if (!props.throttled) { emit('click', event); return; }
      if (isFirst.value) {
        emit('click', event);
        isFirst.value = false;
        // timeout = setTimeout(() => {
        //   clearTimeout(timeout);
        //   timeout = null;
        //   isFirst = true;
        // }, props.throttleTime);
      }
    }
    return { onclick };
  },
});
</script>

<style scoped>
.tb-button {
  border: none;
  border-radius: 30px;
  width: 100px;
  height: 50px;
  background: salmon;
}
</style>
