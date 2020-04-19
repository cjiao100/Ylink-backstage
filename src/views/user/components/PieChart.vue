<template>
  <ve-pie
    :data="chartData"
    :settings="chartSettings"
    :extend="extend"
    :title="title"
    :width="width"
    height="100px"
  ></ve-pie>
</template>

<script>
export default {
  props: {
    chartTitle: String,
    label: Object,
    level: Array,
    rowsData: Array
  },
  mounted() {
    console.log(this.chartData);
  },
  data() {
    return {
      width: "100%",
      chartData: {
        columns: ["type", "num"],
        rows: this.rowsData
      },
      chartSettings: {
        dataType: "KMB",
        level: this.level,
        labelMap: this.label,
        radius: 50,
        hoverAnimation: false
      },
      extend: {
        legend: v => {
          v.data.shift();
          v.orient = "vertical";
          v.left = "0%";
          v.top = "45%";
          v.formatter = name => {
            let total = this.chartData.rows[0].num;
            let number = this.chartData.rows.filter(row => row.type === name)[0]
              .num;

            return total !== 0
              ? `${name}\t {c|${((number / total) * 100).toFixed(
                  1
                )}%} \t {c|${number}}`
              : `${name}\t {c|${number}}`;
          };
          v.textStyle = {
            rich: {
              c: {
                color: "rgb(1, 162, 170)",
                // fontSize: 16,
                fontWeight: "bold"
              }
            }
          };
          return v;
        },
        series(v) {
          v[0].itemStyle = {
            color: "#fff"
          };
          v[0].label.normal = {
            color: "#000",
            position: "center",
            formatter: params => `${params.name}\n{c|${params.value}}`,
            fontSize: 12,
            rich: {
              c: {
                color: "rgb(1, 162, 170)",
                fontSize: 16,
                fontWeight: "bold"
              }
            }
          };
          v[0].center = ["80%", "50%"];
          v[1].center = ["80%", "50%"];
          v[1].radius = [30, 50];
          v[1].itemStyle = {
            normal: {
              borderColor: "#fff",
              borderWidth: 5
            }
          };
          v[1].label = {
            show: false
          };
          // console.log(v[1]);
          return v;
        }
      },
      title: {
        show: true,
        text: this.chartTitle
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
