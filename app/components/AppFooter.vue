<script setup lang="ts">
  const { footer } = useAppConfig();
</script>

<template>
  <PageFooter class="z-10 bg-default" :ui="{ left: 'text-xs' }">
    <template #left>
      {{ footer.credits }}
    </template>

    <AppLogo />

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </PageFooter>
</template>
