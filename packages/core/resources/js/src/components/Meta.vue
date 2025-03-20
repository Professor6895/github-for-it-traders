<template>
  <div class="vx-row">
    <div class="vx-col w-full mt-2" :class="{ 'md:w-1/2': !small }">
      <vs-input
        name="meta_title"
        v-model="value.meta_title"
        maxlength="100"
        class="w-full"
        label="Meta Title"
        v-validate="'max:70'"
      />
      <p>
        <span class="text-danger text-sm" v-if="errors.has('meta_title')">{{
          errors.first("meta_title")
        }}</span>
      </p>
    </div>
    <div class="vx-col w-full mt-2" :class="{ 'md:w-1/2': !small }">
      <vs-input
        name="meta_keywords"
        v-model="value.meta_keywords"
        class="w-full"
        label="Meta Keywords"
        maxlength="180"
        v-validate="'max:180'"
      />
      <p>
        <span class="text-danger text-sm" v-if="errors.has('meta_keywords')">{{
          errors.first("meta_keywords")
        }}</span>
      </p>
    </div>
    <div class="vx-col w-full mt-2">
      <vs-input
        name="meta_description"
        v-model="value.meta_description"
        class="w-full"
        label="Meta Description"
        maxlength="180"
        v-validate="'max:180'"
      />
      <p>
        <span
          class="text-danger text-sm"
          v-if="errors.has('meta_description')"
          >{{ errors.first("meta_description") }}</span
        >
      </p>
    </div>
  </div>
</template><script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>