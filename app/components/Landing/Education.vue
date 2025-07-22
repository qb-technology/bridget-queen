<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content';

  defineProps<{
    page: IndexCollectionItem;
  }>();
</script>

<template>
  <PageSection
    :title="page.education.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2',
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(education, index) in page.education.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ education.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="education.university.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ education.degree }}
            </span>
            <div class="inline-flex items-center gap-1">
              <span class="font-medium">{{ education.university.name }}</span>
              <UIcon
                v-if="education.university.logo"
                :name="education.university.logo"
              />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </PageSection>
</template>

<style scoped></style>
