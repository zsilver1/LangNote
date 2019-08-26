<template>
  <el-menu>
    <el-submenu index="1">
      <template slot="title">
        <span>Word Classes</span>
      </template>
      <el-menu-item-group v-for="i in pos" :title="i" :key="i.id">
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  get pos() {
    return this.$store.state.pos;
  }
}
</script>