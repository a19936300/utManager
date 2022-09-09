<template>
  <p>helloword</p>
  <div class="col"></div>
  <img :src="dev33" />
  <el-button>Default</el-button>
  <el-button @click="demoClik" type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<script lang="ts">
import {pingGuo} from "@assets/js/shuiguo"
import img33 from "@assets/img/1.jpg";

export default {
  data() {
    return {
      dev33: img33,
    };
  },
  methods: {
    demoClik(){
    var pingguo = new pingGuo();
    console.log(pingguo.kouWei())
  }
  }
  
};
</script>

<style>
@import url("@assets/css/demo.css");
</style>