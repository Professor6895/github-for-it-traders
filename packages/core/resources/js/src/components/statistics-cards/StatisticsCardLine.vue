<!-- =========================================================================================
    File Name: StatisticsCard.vue
    Description: Statistics card component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card class="overflow-hidden">
    <div slot="no-body" class="pb-3">
      <div class="mt-3 mb-3" v-if="loading">
        <div class="text-center">
          <img src="@assets/images/loader.gif" alt width="80px" style="margin-left:33%" />
        </div>
      </div>
      <div
        v-else
        class="p-6"
        :class="{
              'flex justify-between flex-row-reverse items-center': iconRight,
              'text-center': !iconRight && hideChart,
              'pb-0': !hideChart
            }"
      >
        <feather-icon
          :icon="icon"
          class="p-3 inline-flex rounded-full"
          :class="[`text-${color}`, {'mb-4': !iconRight}]"
          :style="{background: `rgba(var(--vs-${color}),.15)`}"
        ></feather-icon>
        <div class="truncate">
          <h2 class="mb-1 font-bold">{{ statistic }}</h2>
          <span>{{ statisticTitle }}</span>
          <br />
          <router-link :to="link" v-if="link">
            <vs-button size="small" class="mt-3" :color="color" type="border">{{ linkLabel }}</vs-button>
          </router-link>
        </div>
      </div>
    </div>
  </vx-card>
</template>

<script>
import _color from "@assets/utils/color.js";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    statistic: {
      type: [Number, String],
      required: true,
    },
    statisticTitle: {
      type: String,
    },
    color: {
      type: String,
      default: "primary",
    },
    colorTo: {
      type: String,
    },
    iconRight: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: null,
    },
    linkLabel: {
      type: String,
      default: "View All",
    },
      hideChart: {
          type: Boolean,
          default: false,
        }
  },
  methods: {
    getHex(color) {
      if (_color.isColor(color)) {
        let rgb = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`--vs-${color}`);
        rgb = rgb.split(",");
        return (
          "#" +
          (
            (1 << 24) +
            (Number(rgb[0]) << 16) +
            (Number(rgb[1]) << 8) +
            Number(rgb[2])
          )
            .toString(16)
            .slice(1)
        );
      }
      return color;
    },
    gradientToColor(color) {
      let gradientToColors = {
        primary: "#A9A2F6",
        success: "#55DD92",
        warning: "#ffc085",
        danger: "#F97794",
      };

      return gradientToColors[color]
        ? gradientToColors[color]
        : gradientToColors["primary"];
    },
  },
};
</script>
