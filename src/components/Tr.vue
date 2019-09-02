<template>
  <tr>
    <td>{{item.date}}</td>
    <td><input type="text" v-model="item.name" name="" id="" v-show="item.flag"><span v-show="!item.flag">{{item.name}}</span></td>
    <td><input type="text" v-model="item.level" name="" id="" v-show="item.flag"><span v-show="!item.flag">{{item.level}}</span></td>
    <td><button @click="handleChange(item)">{{falg?'save':'edit'}}</button></td>
    <td><button @click="handleDel(item.date)">Delete</button></td>
  </tr>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    props:['item'],
    data() {
        return {
            falg:false,
        }
    },
    computed: {
        ...mapState(['list'])
    },
    methods: {
        ...mapMutations(['delList']),
        handleDel(id){
            this.delList(id)
        },
        handleChange(item){
            item.flag=!item.flag
            this.falg=!this.falg
        }
    }
}
</script>

<style>

</style>