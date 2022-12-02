"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Calculator",
  setup() {
    const data = common_vendor.reactive({
      resNum: 0
    });
    common_vendor.onBeforeMount(() => {
    });
    common_vendor.onMounted(() => {
    });
    const refData = common_vendor.toRefs(data);
    return __spreadValues({}, refData);
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      span: 6
    }),
    b: common_vendor.p({
      span: 18
    }),
    c: common_vendor.p({
      span: 6
    }),
    d: common_vendor.p({
      span: 6
    }),
    e: common_vendor.p({
      span: 6
    }),
    f: common_vendor.p({
      span: 6
    }),
    g: common_vendor.p({
      span: 6
    }),
    h: common_vendor.p({
      span: 6
    }),
    i: common_vendor.p({
      span: 6
    }),
    j: common_vendor.p({
      span: 6
    }),
    k: common_vendor.p({
      span: 6
    }),
    l: common_vendor.p({
      span: 6
    }),
    m: common_vendor.p({
      span: 6
    }),
    n: common_vendor.p({
      span: 6
    }),
    o: common_vendor.p({
      span: 6
    }),
    p: common_vendor.p({
      span: 6
    }),
    q: common_vendor.p({
      span: 6
    }),
    r: common_vendor.p({
      span: 6
    }),
    s: common_vendor.p({
      span: 6
    }),
    t: common_vendor.p({
      span: 6
    }),
    v: common_vendor.p({
      span: 6
    }),
    w: common_vendor.p({
      span: 6
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9fdbaaf8"], ["__file", "D:/Files/Code/HB_Projects/money-man/components/Calculator/Calculator.vue"]]);
wx.createComponent(Component);
