<script lang="ts" setup>
  import type { AvatarProps } from '@nuxt/ui';
  import { tv } from 'tailwind-variants';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  /* @vue-ignore */
  export interface ColorModeAvatarProp {
    light?: string;
    dark?: string;
    alt?: string;
    size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl' | '3xs' | '2xs' | '2xl' | '3xl';
  }

  const props = withDefaults(defineProps<ColorModeAvatarProp>(), {
    light: '',
    dark: '',
    alt: '',
    size: 'md',
  });
  const colorMode = useColorMode();

  const isDark = computed({
    get() {
      return colorMode.value === 'dark';
    },
    set(_isDark) {
      colorMode.preference = _isDark ? 'dark' : 'light';
    },
  });
</script>

<template>
  <!-- <ClientOnly v-if="!colorMode?.forced"> -->
  <UAvatar
    v-bind="{
      ...props,
      src: isDark ? light : dark,
    }"
  />

  <!-- <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly> -->
</template>

<style scoped></style>
