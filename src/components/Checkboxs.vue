<template>
  <div>
    <div class="box">
      <!-- 头部 -->
      <div class="head">
        <div class="allselect">
          <div v-if="selected.length==0">
            <input type="checkbox" @click="selectAll" :checked="allSelect">
            <span>{{mume.selnull}}</span>
          </div>
          <div v-else-if="checkboxItems.length>selected.length">
            <input type="checkbox" @click="selectAll" :checked="allSelect" class="line">
            <span>{{mume.selmid}}</span>
          </div>
          <div v-if="checkboxItems.length==selected.length">
            <input type="checkbox" @click="selectAll" :checked="allSelect">
            <span>{{mume.selall}}</span>
          </div>
        </div>
        <button style="color:#0052D9 " @click="clean" class="btn">{{mume.selcle}}</button>
      </div>
      <!-- 主体 -->
      <div class="main">
        <div v-for="(item, index) in checkboxItems" :key="index" class="item">
          <input
            type="checkbox"
            @click="select(index)"
            :checked="item.checked"
            :disabled="item.disabled"
          >
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  data() {
    return {
      selected: [],
      allSelect: false
    };
  },

  props: ["checkboxItems",'mume'],
  methods: {
    selectAll() {
      this.allSelect = !this.allSelect;
      if (this.allSelect) {
        for (let i = 0; i < this.checkboxItems.length; i++) {
          if (!this.checkboxItems[i].disabled) {
            this.checkboxItems[i].checked = true;
            this.selected.push(this.checkboxItems[i].name);
            this.selected = [...new Set(this.selected)];
          }
        }
      } else {
        for (let i = 0; i < this.checkboxItems.length; i++) {
          this.checkboxItems[i].checked = false;
          this.selected = [];
        }
      }
      console.log(this.selected);
      this.$emit("changes", this.selected);
    },
    select(a, b) {
      this.checkboxItems[a].checked = !this.checkboxItems[a].checked;
      if (this.checkboxItems[a].checked) {
        this.selected.push(this.checkboxItems[a].name);
      } else {
        this.selected.splice(
          this.selected.indexOf(this.checkboxItems[a].name),
          1
        );
      }
      console.log(this.selected);
      if (this.checkboxItems.length == this.selected.length) {
        this.allSelect = true;
      } else {
        this.allSelect = false;
      }
      this.$emit("changes", this.selected);
    },
    clean() {
      this.allSelect = false;
      for (let i = 0; i < this.checkboxItems.length; i++) {
        if (!this.checkboxItems[i].disabled) {
          this.checkboxItems[i].checked = false;
          this.selected = [];
        }
      }
      this.$emit("changes", this.selected);
    }
  }
};
</script>

<style scoped>
.box {
  width: 500px;
}
.box .head {
  width: 500px;
  height: 57px;
  border-bottom: 1px #f0f0f0 solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.main .item {
  width: 125px;
  margin-bottom: 27px;
}
.main .item:nth-child(-n + 4) {
  margin-top: 16px;
}
span {
  margin-left: 8px;
}
input[type="checkbox"] {
  position: relative;
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  /* display: none */
}
input[type="checkbox"]:hover::before {
  background-color: rgb(254, 254, 254);
  content: "";
  background: #ffffff;
  border: 1px solid #6697e8;
}
input[type="checkbox"]:checked::before {
  background-color: #fff;
  content: "";
  border: 1px solid #0052d9;
  background: #0052d9;
}
input[type="checkbox"]::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
}
input[type="checkbox"]:checked::after {
  position: absolute;
  top: 4px;
  left: 3px;
  width: 9px;
  height: 4px;
  border: 2px solid #fff;
  border-width: 0 0 2px 2px;
  -webkit-transform: rotateZ(-45deg);
  -ms-transform: rotateZ(-45deg);
  content: "";
}
input[disabled] + span {
  color: #ccc;
}
input[disabled]:checked::after {
  position: absolute;
  top: 4px;
  left: 3px;
  width: 9px;
  height: 4px;
  border: 2px solid #d9d9d9;
  border-width: 0 0 2px 2px;
  -webkit-transform: rotateZ(-45deg);
  -ms-transform: rotateZ(-45deg);
  content: "";
}
input[disabled]:checked::before {
  background-color: #fff;
  content: "";
  border: 1px solid #d9d9d9;
  background: #fff;
}
input[disabled]:hover::before{
  border: 1px solid #d9d9d9;
}
input[type="checkbox"].line::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #0052d9;
  border: 1px solid #0052d9;
}
input[type="checkbox"].line::after {
  position: absolute;
  top: 3px;
  left: 2px;
  width: 12px;
  right: 2px;
  height: 4px;
  border-bottom: 1px solid #fff;
  border-width: 0 0 2px 2px;
  content: "";
}
.btn {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  font-size: 14px;
  height: 19px;
}
</style>
