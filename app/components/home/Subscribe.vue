<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { t } = useI18n();

const isResendEnabled = useRuntimeConfig().public.resend;

const state = ref({
  email: "",
});

const schema = z.object({
  email: z.string().email("Invalid email"),
});
type Schema = z.output<typeof schema>;

const loading = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  try {
    await $fetch("/api/emails/send", {
      method: "POST",
      body: event.data,
    });
    state.value = {
      email: "",
    };
    toast.success(t("global.subscribe.success"));
  } catch {
    toast.error(t("global.subscribe.error"));
  }
  loading.value = false;
}
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-8xl flex-col">
    <h2 class="text-white-shadow text-center text-xl mb-4">
      <slot name="title" mdc-unwrap="p" />
    </h2>
    <h3 class="text-center text-lg font-extralight italic text-muted">
      <slot name="subtitle" mdc-unwrap="p" />
    </h3>
    <div class="flex flex-col sm:items-center sm:justify-between">
      <UForm :state :schema class="flex w-full gap-3" @submit="onSubmit">
        <UFormField name="email" required>
          <UInput
            v-model="state.email"
            autocomplete="email"
            class="w-full"
            :placeholder="$t('global.subscribe.placeholder')"
          />
        </UFormField>
        <div class="flex justify-center">
          <UTooltip
            :disabled="isResendEnabled"
            :text="$t('global.subscribe.disabled')"
          >
            <UButton :loading :disabled="!isResendEnabled" type="submit" block>
              {{ $t("global.subscribe.button") }}
            </UButton>
          </UTooltip>
        </div>
      </UForm>
    </div>
  </section>
</template>
