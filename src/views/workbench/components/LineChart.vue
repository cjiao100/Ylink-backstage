<template>
  <!-- <div :class="className" :style="{ height: height, width: width }" /> -->
  <ve-line
    v-if="show"
    :data="chartData"
    :settings="chartSettings"
    :extend="extend"
    :height="height"
    :width="width"
  ></ve-line>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
      className: "chart",
      height: "350px",
      width: "100%",
      chart: null,
      chartData: {
        columns: ["date", "online"],
        rows: this.online
      },
      chartSettings: {
        labelMap: { date: "时间", online: "当前在线人数" },
        area: true,
        itemStyle: {
          normal: {
            color: "#3888fa",
            lineStyle: {
              color: "#3888fa",
              width: 2
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#6fa8fb"
                  },
                  {
                    offset: 1,
                    color: "rgba(255,255,255,0)"
                  }
                ],
                global: false
              }
            }
          }
        }
      },
      extend: {
        xAxis: {
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          },
          splitNumber: 5,
          minInterVal: 0,
          min: 0
        },
        series(v) {
          v.forEach(i => {
            i.animationDuration = 2800;
            i.animationEasing = "quadraticOut";
            i.clip = false;
          });
          return v;
        }
      }
    };
  },
  computed: {
    ...mapGetters(["online"])
  },
  watch: {
    online(newVal) {
      this.show = true;
      this.chartData.rows = newVal;
    }
  }
  // updated() {
  //   console.log(this.chartData);
  // }
};
</script>

<style></style>
