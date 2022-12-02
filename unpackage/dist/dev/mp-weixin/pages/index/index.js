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
  name: "",
  setup() {
    const data = common_vendor.reactive({
      pMargin: "0px",
      nMargin: "15px"
    });
    common_vendor.onBeforeMount(() => {
    });
    common_vendor.onMounted(() => {
    });
    const scroll = (e) => {
      console.log(e);
    };
    const swapeChange = (e) => {
      console.log(e);
      if ((e == null ? void 0 : e.detail.current) === 0) {
        data.pMargin = "0px";
        data.nMargin = "15px";
      } else {
        data.pMargin = "25px";
        data.nMargin = "0px";
      }
    };
    let popup = common_vendor.ref(null);
    const openPop = () => {
      console.log(popup);
      popup.value.open();
    };
    const refData = common_vendor.toRefs(data);
    return __spreadValues({
      scroll,
      swapeChange,
      openPop,
      popup
    }, refData);
  }
};
if (!Array) {
  const _easycom_MoneyCard2 = common_vendor.resolveComponent("MoneyCard");
  const _easycom_HoverButton2 = common_vendor.resolveComponent("HoverButton");
  const _easycom_Calculator2 = common_vendor.resolveComponent("Calculator");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_MoneyCard2 + _easycom_HoverButton2 + _easycom_Calculator2 + _easycom_uni_popup2)();
}
const _easycom_MoneyCard = () => "../../components/MoneyCard/MoneyCard.js";
const _easycom_HoverButton = () => "../../components/HoverButton/HoverButton.js";
const _easycom_Calculator = () => "../../components/Calculator/Calculator.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_MoneyCard + _easycom_HoverButton + _easycom_Calculator + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u672C\u6708\u652F\u51FA",
      number: "1000.00",
      text1: "\u672C\u6708\u6536\u5165",
      item1: "2000.00",
      text2: "\u672C\u6708\u7ED3\u4F59",
      item2: "1000.00"
    }),
    b: common_vendor.o($setup.openPop),
    c: common_vendor.sr("popup", "7d3631c9-2"),
    d: common_vendor.p({
      type: "bottom"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Files/Code/HB_Projects/money-man/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
