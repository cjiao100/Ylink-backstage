<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons");

export default {
  data() {
    return {
      className: "chart",
      height: "350px",
      width: "100%",
      chart: null,
      chartData: {
        time: [
          "7:00",
          "7:30",
          "8:00",
          "8:30",
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00"
        ],
        currentData: [120, 82, 91, 154, 162, 140, 145, 120, 82, 91]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$el);
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      // console.log(this.chart);
      this.setOptions(this.chartData);
    },
    setOptions({ time, currentData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: time,
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
            type: "cross"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ["用户"]
        },
        series: [
          {
            name: "在线用户",
            smooth: true,
            type: "line",
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
                        // color: "#4b93fa"
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
            },
            data: currentData,
            animationDuration: 2800,
            animationEasing: "quadraticOut"
          }
        ]
      });
    }
  }
};
</script>

<style></style>
