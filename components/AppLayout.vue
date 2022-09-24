<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" dir="rtl"/>
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-stone-50 dark:bg-stone-900;
}
code {
  direction:ltr;
}
</style>
