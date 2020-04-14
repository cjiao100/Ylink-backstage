<template>
  <ve-line
    :data="chartData"
    :settings="settings"
    :extend="extend"
    width="150px"
    height="100px"
  ></ve-line>
</template>

<script>
export default {
  props: {
    lineColor: String,
    rowsData: Array
  },
  data() {
    return {
      chartData: {
        columns: ["日期", "新增"],
        rows: this.rowsData
      },
      settings: {
        xAxisType: "category"
      },
      extend: {
        grid: {
          top: "10%",
          left: "10%",
          right: "10%",
          bottom: "10%"
        },
        legend: {
          show: false
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: this.lineColor,
              width: 2
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          position: "left",
          axisLine: {
            show: true,
            lineStyle: {
              color: this.lineColor,
              width: 2
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        tooltip: {
          show: false
        },
        series: {
          symbol: "none",
          lineStyle: {
            width: 3,
            color: this.lineColor
          }
        }
      }
    };
  }
};
</script>

<style></style>
