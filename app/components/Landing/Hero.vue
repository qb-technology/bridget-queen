<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content';
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

  const { footer, global } = useAppConfig();

  const breakpoints = useBreakpoints(breakpointsTailwind);

  defineProps<{
    page: IndexCollectionItem;
  }>();

  const orientation = computed(() => {
    // if (import.meta.server) return 'horizontal';
    return breakpoints.greaterOrEqual('lg').value ? 'horizontal' : 'vertical';
  });
  const reverse = computed(() => {
    // if (import.meta.server) return true;
    return !breakpoints.greaterOrEqual('lg').value;
  });
</script>

<template>
  <PageHero
    :orientation="orientation"
    :reverse="reverse"
    :ui="{
      headline: 'flex items-center justify-center',
      title:
        'text-shadow-md text-center lg:text-start max-w-lg mx-auto text-4xl sm:text-5xl md:text-5xl lg:text-5xl',
      links: 'mt-4 flex-col justify-start items-center lg:items-start',
      description:
        'mt-2 text-xs sm:text-sm lg:text-base text-center lg:text-start',
      container: '!py-10 gap-4 sm:gap-y-8 lg:gap-16',
    }"
  >
    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1,
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3,
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <div class="gap-x-4 inline-flex flex-wrap mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)',
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + index * 0.1,
          }"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>

    <Motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)',
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      }"
      :transition="{
        duration: 0.6,
        delay: 0.1,
      }"
      class="w-full flex justify-center lg:justify-start"
    >
      <ColorModeAvatar
        class="size-full sm:size-60 md:size-90 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </Motion>
  </PageHero>
</template>
