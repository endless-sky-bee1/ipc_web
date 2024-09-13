<template>
  <div class="config-menu">
    <ul>
      <li @click="selectMenu('DeviceConfig')">设备配置</li>
      <li @click="selectMenu('NetworkConfig')">网络配置</li>
      <li @click="selectMenu('CameraConfig')">摄像头配置</li>
      <li @click="selectMenu('SystemMaintenance')">系统维护</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConfigMenu',
  methods: {
    selectMenu(component) {
      this.$emit('menuSelect', component)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  cursor: pointer;
  padding: 10px;
}
li:hover {
  background-color: #f0f0f0;
}
</style>