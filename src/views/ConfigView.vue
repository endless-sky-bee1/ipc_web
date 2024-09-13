<template>
    <div class="config-view">
      <div class="menu">
        <ConfigMenu @menuSelect="handleMenuSelect" />
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
  </style>