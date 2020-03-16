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
  data() {
    return {
      width: "100%",
      chartData: {
        columns: ["type", "num"],
        // rows: [
        //   { type: "全部用户", num: 3530 + 1393 },
        //   { type: "活跃用户", num: 1393 },
        //   { type: "其他用户", num: 3530 }
        // ]
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
            // console.log(this);
            // console.log();
            let total = this.chartData.rows[0].num;
            let number = this.chartData.rows.filter(row => row.type === name)[0]
              .num;

            // this.chartData.rows.fillter(row => row.type === name);

            return `${name}\t {c|${((number / total) * 100).toFixed(
              1
            )}%} \t {c|${number}}`;
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
          // console.log(v);
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
