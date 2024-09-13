<template>
  <div class="config-menu">
    <ul>
      <li @click="selectMenu('DeviceConfig')">设备配置</li>
      <li @click="selectMenu('NetworkConfig')">网络配置</li>
      <li @click="selectMenu('CameraConfig')">摄像头配置</li>
      <li @click="selectMenu('SystemMaintenance')">系统维护</li>
      <li @click="goToLiveStream" class="back-to-live">返回直播</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConfigMenu',
  methods: {
    selectMenu(component) {
      this.$emit('menuSelect', component)
    },
    goToLiveStream() {
      this.$emit('goToLiveStream')
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
.back-to-live {
  margin-top: 20px; /* 添加一些顶部边距以区分其他选项 */
  color: #007bff; /* 使用不同的颜色以突出显示 */
}
</style>