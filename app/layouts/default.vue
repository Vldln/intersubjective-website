<template>
  <div>
    <!-- <SettingsLanguageToggle class="fixed right-1 z-50 top-1" /> Open if need translate-->
    <LayoutNavbar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />
    <div class="sm:mt-[50px]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
