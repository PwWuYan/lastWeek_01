<template>
  <table>
    <tr>
      <td>Num</td>
      <td>Nama</td>
      <td>Level</td>
    </tr>
    <tr>
      <td></td>
      <td>
        <input type="text" name id v-model="name" />
      </td>
      <td>
        <input type="text" name id v-model="level" />
      </td>
      <td>
        <button @click="handleSave">save</button>
      </td>
    </tr>
    <Tr v-for="(item,index) in list" :key="index" :item="item" :name="name" :level="level"></Tr>
  </table>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Tr from "./components/Tr.vue";
export default {
  data() {
    return {
      name: "",
      level: ""
    };
  },
  computed: {
    ...mapState(["list"])
  },
  components: {
    Tr
  },
  methods: {
    ...mapMutations(["setList"]),
    handleSave() {
      let obj = {
        date: new Date() * 1,
        name: this.name,
        level: this.level,
        flag: false
      };
      if (this.name == "" || this.level == "") {
        return;
      } else {
        this.setList(obj);
        this.name = "";
        this.level = "";
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
table {
  width: 60%;
  margin: 0 auto;
}
</style>
