<template>
  <div id="app">
    <checkbox  :menu="menu" :checkboxItems="checkboxItem" @change="change"></checkbox>
    <checkboxs :menu="menus" :checkboxItems="checkboxItems" @changes="changes"></checkboxs>
    <div>{{select}}</div>
    <div>{{selects}}</div>
    <goto></goto>
  </div>
</template>

<script>
import checkbox from "../components/Checkbox";
import checkboxs from "../components/Checkboxs";
import goto from "../components/Goto"
export default {
  data() {
    return {
       menu:{
        selnull:"未",
        selmid:"未全",
        selall:"全"
      },
      checkboxItem: [
        { name: "选项1", checked: false, disabled: true },
        { name: "选项2", checked: false, disabled: false },
        { name: "选项3", checked: false, disabled: false }
      ],
      menus:{
        selnull:"1",
        selmid:"2",
        selall:"3",
        selcle:'清空'
      },
      checkboxItems: [
        { name: "选项1", checked: false, disabled: true },
        { name: "选项2", checked: false, disabled: false },
        { name: "选项3", checked: false, disabled: false },
        { name: "选项4", checked: false, disabled: false },
        { name: "选项5", checked: false, disabled: false },
        { name: "选项6", checked: false, disabled: false },
        { name: "选项7", checked: false, disabled: false },
        { name: "选项8", checked: false, disabled: false },
        { name: "选项9", checked: false, disabled: false },
        { name: "选项10", checked: false, disabled: false },
        { name: "选项11", checked: false, disabled: false },
        { name: "选项12", checked: false, disabled: false },
        { name: "选项13", checked: false, disabled: false },
        { name: "选项14", checked: false, disabled: false },
        { name: "选项15", checked: false, disabled: false },
        { name: "选项16", checked: false, disabled: false }
      ],
      select: [],
      selects: []
    };
  },
  methods: {
    change(a) {
      this.select = a;
    },
    changes(a) {
      this.selects = a;
    }
  },
  name: "index",
  components: {
    checkbox,
    checkboxs,
    goto
  }
};
</script>