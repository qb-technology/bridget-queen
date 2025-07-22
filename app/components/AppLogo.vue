<script setup lang="ts">
  import { useDark } from '@vueuse/core';

  const validSizes = ['sm', 'base', 'lg', 'md', 'xl', '2xl'];
  const props = defineProps({
    size: {
      type: String,
      default: 'base',
    },
  });

  const classes = {
    base: {
      svg: 'size-4',
      letters: 'font-semibold text-lg',
    },
    '2xl': {
      svg: 'size-9 px-1',
      letters: 'font-bold text-4xl',
    },
  } as any;

  const classSVG = classes[props.size].svg;
  const classLetters = classes[props.size].letters;
</script>

<template>
  <NuxtLink to="/">
    <span
      class="flex items-center [&>*]:flex-shrink w-fit uppercase space-x-0"
      :class="[classLetters]"
    >
      <span>cyb</span>
      <UIcon name="i-qb-cybandy-logo" :class="classSVG" class="text-primary" />
      <!-- <span
        class="[&>*]:text-primary-500"
        :class="[classSVG]"
        v-html="icon"
      ></span> -->
      <span>ndy</span>
    </span>
  </NuxtLink>
</template>

<style scoped></style>
