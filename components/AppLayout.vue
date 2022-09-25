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
  @apply bg-light dark:bg-dark;
}
code {
  direction:ltr;
}
</style>
