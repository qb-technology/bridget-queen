<script setup lang="ts">
  import { tv } from 'tailwind-variants';
  import type { PrimitiveProps } from 'reka-ui';
  const page = tv({
    slots: {
      root: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-10',
      left: 'lg:col-span-2',
      center: 'lg:col-span-8',
      right: 'lg:col-span-2 order-first lg:order-last',
    },
    variants: {
      left: {
        true: '',
      },
      right: {
        true: '',
      },
    },
    compoundVariants: [
      {
        left: true,
        right: true,
        class: {
          center: 'lg:col-span-6',
        },
      },
      {
        left: false,
        right: false,
        class: {
          center: 'lg:col-span-10',
        },
      },
    ],
  });
  type UI = Partial<(typeof page)['slots']>;
  export interface PageProp extends PrimitiveProps {
    class?: string;
    ui?: UI;
  }
  const props = withDefaults(defineProps<PageProp>(), {
    as: 'div',
    class: '',
    ui: () => ({}),
  });

  const slots = useSlots();
  const _ui = computed(() =>
    page({
      left: Boolean(slots.left),
      right: Boolean(slots.right),
    }),
  );
</script>

<template>
  <div :class="_ui.root({ class: [ui.root, props.class] })">
    <div v-if="$slots.left" :class="_ui.left({ class: ui.left })">
      <slot name="left" />
    </div>
    <div :class="_ui.center({ class: ui.center })">
      <slot />
    </div>
    <div v-if="$slots.right" :class="_ui.right({ class: ui.right })">
      <slot name="right" />
    </div>
  </div>
</template>
