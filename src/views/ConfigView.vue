<template>
    <div class="config-view">
      <div class="menu">
        <ConfigMenu @menuSelect="handleMenuSelect" @goToLiveStream="goToLiveStream" />
      </div>
      <div class="content">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </template>
  
  <script>
  import ConfigMenu from '@/components/ConfigMenu.vue'
  import DeviceConfig from '@/components/DeviceConfig.vue'
  import NetworkConfig from '@/components/NetworkConfig.vue'
  import CameraConfig from '@/components/CameraConfig.vue'
  import SystemMaintenance from '@/components/SystemMaintenance.vue'
  
  export default {
    name: 'ConfigView',
    components: {
      ConfigMenu,
      DeviceConfig,
      NetworkConfig,
      CameraConfig,
      SystemMaintenance
    },
    data() {
      return {
        currentComponent: 'DeviceConfig'
      }
    },
    methods: {
      handleMenuSelect(component) {
        this.currentComponent = component
      },
      goToLiveStream() {
        this.$router.push('/') // 假设直播页面的路由是根路径 '/'
      }
    }
  }
  </script>
  
  <style scoped>
  .config-view {
    display: flex;
  }
  .menu {
    width: 200px;
    border-right: 1px solid #ccc;
  }
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .back-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .back-button:hover {
    background-color: #0056b3;
  }
  </style>