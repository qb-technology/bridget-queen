<script setup lang="ts">
  import { tv } from 'tailwind-variants';
  import { type PrimitiveProps, Primitive } from 'reka-ui';
  import type { BadgeProps } from '@nuxt/ui';
  import type { AppUserProp } from '../AppUser.vue';
  import type {
    RouteLocationAsRelativeGeneric,
    RouteLocationAsPathGeneric,
  } from '#vue-router';

  const blogPost = tv({
    slots: {
      root: 'relative group/blog-post flex flex-col rounded-lg overflow-hidden',
      header:
        'relative overflow-hidden aspect-[16/9] w-full pointer-events-none',
      body: 'min-w-0 flex-1 flex flex-col',
      footer: '',
      image: 'object-cover object-top w-full h-full',
      title: 'text-xl text-pretty font-semibold text-highlighted',
      description: 'mt-1 text-base text-pretty',
      authors: 'pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5',
      avatar: '',
      meta: 'flex items-center gap-2 mb-2',
      date: 'text-sm',
      badge: '',
    },
    variants: {
      orientation: {
        horizontal: {
          root: 'lg:grid lg:grid-cols-2 lg:items-center gap-x-8',
          body: 'justify-center p-4 sm:p-6 lg:px-0',
        },
        vertical: {
          root: 'flex flex-col',
          body: 'p-4 sm:p-6',
        },
      },
      variant: {
        outline: {
          root: 'bg-default ring ring-default',
          date: 'text-toned',
          description: 'text-muted',
        },
        soft: {
          root: 'bg-elevated/50',
          date: 'text-muted',
          description: 'text-toned',
        },
        subtle: {
          root: 'bg-elevated/50 ring ring-default',
          date: 'text-muted',
          description: 'text-toned',
        },
        ghost: {
          date: 'text-toned',
          description: 'text-muted',
          header: 'shadow-lg rounded-lg',
        },
        naked: {
          root: 'p-0 sm:p-0',
          date: 'text-toned',
          description: 'text-muted',
          header: 'shadow-lg rounded-lg',
        },
      },
      to: {
        true: {
          root: ['transition'],
          image:
            'transform transition-transform duration-200 group-hover/blog-post:scale-110',
          avatar: 'transform transition-transform duration-200 hover:scale-115',
        },
      },
      image: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        to: true,
        class: {
          root: 'hover:bg-elevated/50',
        },
      },
      {
        variant: 'soft',
        to: true,
        class: {
          root: 'hover:bg-elevated',
        },
      },
      {
        variant: 'subtle',
        to: true,
        class: {
          root: 'hover:bg-elevated hover:ring-accented',
        },
      },
      {
        variant: 'ghost',
        to: true,
        class: {
          root: 'hover:bg-elevated/50',
          header: ['group-hover/blog-post:shadow-none', 'transition-all'],
        },
      },
      {
        variant: 'ghost',
        to: true,
        orientation: 'vertical',
        class: {
          header: 'group-hover/blog-post:rounded-b-none',
        },
      },
      {
        variant: 'ghost',
        to: true,
        orientation: 'horizontal',
        class: {
          header: 'group-hover/blog-post:rounded-r-none',
        },
      },
      {
        orientation: 'vertical',
        image: false,
        variant: 'naked',
        class: {
          body: 'p-0 sm:p-0',
        },
      },
    ],
    defaultVariants: {
      variant: 'outline',
    },
  });
  type UI = Partial<(typeof blogPost)['slots']>;
  export interface BlogPost extends PrimitiveProps {
    class?: string;
    ui?: UI;
    title?: string;
    description?: string;
    date?: string | Date;
    badge?: string | BadgeProps;
    authors?: Array<AppUserProp>;
    image?: string;
    orientation?: 'horizontal' | 'vertical';
    variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'naked';
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
    target?: null | '_blank' | '_parent' | '_self' | '_top' | (string & {});
  }
  const props = withDefaults(defineProps<BlogPost>(), {
    as: 'div',
    class: '',
    ui: () => ({}),
    title: '',
    description: '',
    date: '',
    badge: '',
    authors: () => [],
    image: '',
    orientation: 'vertical',
    variant: 'outline',
    to: '',
    target: null,
  });

  const _ui = computed(() =>
    blogPost({
      orientation: props.orientation,
      variant: props.variant,
      to: Boolean(props.to),
      image: Boolean(props.image),
    }),
  );

  function formatDate(input: string | Date) {
    const date = new Date(input); // Month is 0-indexed (Nov = 10)
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDate;
  }
</script>

<template>
  <div :class="_ui.root({ class: [ui.root, props.class] })">
    <div
      v-if="$slots.header || image"
      :class="_ui.header({ class: ui.header })"
    >
      <slot name="header" />
      <img :src="image" :class="_ui.image({ class: ui.image })" />
    </div>
    <div
      v-if="
        $slots.body ||
        $slots.title ||
        title ||
        description ||
        $slots.description ||
        badge ||
        $slots.badge ||
        $slots.date ||
        date
      "
      :class="_ui.body({ class: ui.body })"
    >
      <primitive as-child :class="_ui.badge({ class: ui.badge })">
        <slot v-if="badge || $slots.badge" name="badge">
          <UBadge
            v-if="badge"
            v-bind="{
              ...(typeof props.badge === 'string'
                ? { label: props.badge }
                : { color: 'neutral', variant: 'subtle', ...props.badge }),
            }"
          />
        </slot>
      </primitive>

      <time
        v-if="date"
        :datetime="date.toLocaleString()"
        :class="_ui.date({ class: ui.date })"
      >
        {{ formatDate(date) }}
      </time>
      <h2 v-if="title || $slots.title" :class="_ui.title({ class: ui.title })">
        <slot name="title">
          {{ title }}
        </slot>
      </h2>
      <div
        v-if="description || $slots.description"
        :class="_ui.description({ class: ui.description })"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>
      <slot name="body" />
    </div>
    <div
      v-if="$slots.footer || authors.length"
      :class="_ui.footer({ class: ui.footer })"
    >
      <AppUser v-if="authors.length === 1" v-bind="authors[0]" />
      <UAvatarGroup v-else-if="authors.length > 1" :max="2">
        <UAvatar
          v-for="(author, ind) of authors"
          v-bind="author.avatar"
          :key="ind"
        />
      </UAvatarGroup>
      <slot name="footer" />
    </div>
  </div>
</template>
