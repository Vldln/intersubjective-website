<script setup lang="ts">
</script>

<template>
  <section
    class="mx-auto mt-4 flex max-w-4xl flex-col p-6 sm:mt-20 text-[var(--ui-text-toned)]"
  >
    <h1 class="text-white-shadow text-4xl">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-lg font-extralight text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>

    <Divider class="mb-8 mt-2" />
    <div
      class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="relative flex flex-col gap-3">
        <div class="flex flex-col gap-4 text-primary">
          <slot
            name="intro"
            mdc-unwrap="p"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto mt-4 max-w-4xl px-6 text-[var(--ui-text-toned)]">
    <AboutTeam
      style="--stagger: 6"
      data-animate
    />
  </section>
</template>
