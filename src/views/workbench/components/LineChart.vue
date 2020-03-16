<template>
  <!-- <div :class="className" :style="{ height: height, width: width }" /> -->
  <ve-line
    :data="chartData"
    :settings="chartSettings"
    :extend="extend"
    :height="height"
    :width="width"
  ></ve-line>
</template>

<script>
export default {
  data() {
    return {
      className: "chart",
      height: "350px",
      width: "100%",
      chart: null,
      chartData: {
        columns: ["时间", "当前在线人数"],
        rows: [
          { 时间: "6:30", 当前在线人数: "120" },
          { 时间: "7:00", 当前在线人数: "82" },
          { 时间: "7:30", 当前在线人数: "91" },
          { 时间: "8:00", 当前在线人数: "154" },
          { 时间: "8:30", 当前在线人数: "162" },
          { 时间: "9:00", 当前在线人数: "140" },
          { 时间: "9:30", 当前在线人数: "145" },
          { 时间: "10:00", 当前在线人数: "120" },
          { 时间: "10:30", 当前在线人数: "82" },
          { 时间: "11:00", 当前在线人数: "91" }
        ]
      },
      chartSettings: {
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
          }
        },
        series(v) {
          v.forEach(i => {
            i.animationDuration = 2800;
            i.animationEasing = "quadraticOut";
          });
          return v;
        }
      }
    };
  }
};
</script>

<style></style>
