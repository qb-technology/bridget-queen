<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content';

  defineProps<{
    page: IndexCollectionItem;
  }>();
</script>

<template>
  <PageSection
    :title="page.experience.title"
    :ui="{
      container: '!py-10 !px-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-2xl lg:text-3xl font-medium mb-5',
      description: 'mt-2 text-sm sm:text-base',
    }"
  >
    <template #description>
      <div class="flex flex-col gap-5">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="space-y-2 text-toned text-nowrap"
        >
          <div
            class="flex flex-wrap md:flex-nowrap justify-end sm:justify-between md:justify-start items-center gap-2"
          >
            <ULink
              :to="experience.company.url"
              target="_blank"
              class="text-inherit text-start flex-grow truncate md:overflow-visible w-full xs:w-fit"
            >
              {{ experience.company.name }}
            </ULink>

            <USeparator class="hidden md:inline-block" />

            <p class="">
              {{ experience.company.location }}
            </p>
          </div>
          <div
            class="flex flex-wrap md:flex-nowrap justify-end sm:justify-between md:justify-start items-center gap-2"
          >
            <p
              class="text-inherit text-start flex-grow truncate md:overflow-visible w-full xs:w-fit"
            >
              {{ experience.position }}
            </p>

            <USeparator class="hidden md:inline-block" />

            <p>{{ experience.date }}</p>
          </div>
          <div class="grid text-start gap-2 text-muted pt-2">
            <div
              v-for="(act, i) of experience.actions"
              :key="i"
              class="flex items-center gap-1.5 mx-2"
            >
              <UIcon class="size-4" name="i-lucide-chevron-right" />
              <p class="text-xs sm:text-sm text-wrap">{{ act }}</p>
            </div>
          </div>
        </Motion>
      </div>
    </template>
  </PageSection>
</template>

<style scoped></style>
