<script lang="ts" setup>
  import { tv } from 'tailwind-variants';
  import type { BlogPost } from './Post.vue';
  const blogPosts = tv({
    slots: {
      root: 'flex flex-col gap-8 lg:gap-y-16',
    },
    variants: {
      orientation: {
        horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-3',
        vertical: '',
      },
    },
  });
  type UI = Partial<(typeof blogPosts)['slots']>;
  export interface BlogPosts {
    class?: string;
    posts?: Array<BlogPost>;
    orientation?: 'horizontal' | 'vertical';
    ui?: UI;
  }
  const props = withDefaults(defineProps<BlogPosts>(), {
    orientation: 'horizontal',
    posts: () => [],
    class: '',
    ui: () => ({}),
  });
  const _ui = computed(() =>
    blogPosts({
      orientation: props.orientation,
    }),
  );
</script>

<template>
  <div :class="_ui.root({ class: [ui.root, props.class] })">
    <slot v-if="posts || $slots.default">
      <blog-post v-for="(post, i) of posts" v-bind="post" :key="i" />
    </slot>
  </div>
</template>

<style scoped></style>
