<script setup lang="ts">
const props = defineProps<{
  component: Component;
  items: Array<any>;
}>();

const ui = {
  root: "flex items-center gap-4 w-full",
  list: "relative flex bg-transparent dark:bg-transparent",
  content: "mt-8",
  indicator:
    "absolute top-[4px] duration-200 ease-out focus:outline-none bg-white dark:bg-neutral-900",
  trigger: [
    "rounded-none text-lg relative inline-flex items-center justify-center flex-shrink-0 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-b-4",
    "px-3 py-2 font-medium",
    "hover:bg-neutral-900/80",
    "data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white",
    "data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400",
  ],

  label: "truncate",
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-bold text-white-shadow text-4xl">
        <slot name="title" />
      </h3>
    </div>
    <UTabs :items orientation="horizontal" :ui="ui">
      <template #content="{ item }">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <component
            v-for="item in item.items"
            :key="item.title"
            :is="component"
            :item="item"
          />
        </div>
      </template>
    </UTabs>
  </div>
</template>
