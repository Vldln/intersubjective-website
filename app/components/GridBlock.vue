<script setup lang="ts">
defineProps({
  row: {
    type: Number,
    required: true,
  },
  column: {
    type: Number,
    required: true,
  },
});

interface GridContext {
  size: number;
  offsetX: number;
  offsetY: number;
}

const grid: GridContext =
  inject("grid-context") ||
  ({
    size: 64,
    offsetX: -1,
    offsetY: -1,
  } as GridContext);
</script>

<template>
  <rect
    stroke-width="0"
    :width="grid.size - 1"
    :height="grid.size - 1"
    :x="column * grid.size + grid.offsetX + 1"
    :y="row * grid.size + grid.offsetY + 1"
  />
</template>
