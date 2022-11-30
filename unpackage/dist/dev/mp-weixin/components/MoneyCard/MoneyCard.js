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
  name: "MoneyCard",
  props: {
    title: String,
    number: String,
    text1: String,
    item1: String,
    text2: String,
    item2: String
  },
  setup() {
    const data = common_vendor.reactive({
      hiddens: [
        "../../static/no_hidden.svg",
        "../../static/hidden.svg"
      ],
      isHidden: false
    });
    common_vendor.onBeforeMount(() => {
    });
    common_vendor.onMounted(() => {
    });
    const refData = common_vendor.toRefs(data);
    const getHiddenUrl = common_vendor.computed$1(() => {
      return data.isHidden ? data.hiddens[1] : data.hiddens[0];
    });
    const getMoney = (num) => {
      if (data.isHidden) {
        return "\u2217\u2217\u2217\u2217\u2217\u2217";
      } else {
        return "\uFFE5" + num;
      }
    };
    const clickHidden = () => {
      data.isHidden = !data.isHidden;
    };
    return __spreadValues({
      getHiddenUrl,
      clickHidden,
      getMoney
    }, refData);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.o((...args) => $setup.clickHidden && $setup.clickHidden(...args)),
    c: $setup.getHiddenUrl,
    d: common_vendor.t($setup.getMoney($props.number)),
    e: !_ctx.isHidden ? 1 : "",
    f: common_vendor.t($props.text1),
    g: common_vendor.t($setup.getMoney($props.item1)),
    h: _ctx.isHidden ? 1 : "",
    i: common_vendor.t($props.text2),
    j: common_vendor.t($setup.getMoney($props.item2)),
    k: _ctx.isHidden ? 1 : ""
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e80d2634"], ["__file", "D:/Files/Code/HB_Projects/money-man/components/MoneyCard/MoneyCard.vue"]]);
wx.createComponent(Component);
