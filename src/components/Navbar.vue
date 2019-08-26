<template>
  <el-menu>
    <el-submenu index="1">
      <template slot="title">
        <h1>Word Classes</h1>
      </template>
        <el-menu-item v-for="(pos, i) in partOfSpeech" :key="i">
          <h3>{{pos}}</h3>
        </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<style scoped>
h1 {
  color: #409EFF;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";


@Component
export default class Navbar extends Vue {
  get partOfSpeech() {
    return this.$store.state.pos;
  }
}
</script>