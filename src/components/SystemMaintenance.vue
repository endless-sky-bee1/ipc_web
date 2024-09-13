<template>
    <div class="system-maintenance">
      <h2>系统维护</h2>
      <div class="maintenance-options">
        <button @click="restartDevice">重启设备</button>
        <button @click="resetToDefault">恢复出厂设置</button>
        <button @click="updateFirmware">更新固件</button>
      </div>
      <div class="system-info">
        <h3>系统信息</h3>
        <p>设备型号：{{ systemInfo.model }}</p>
        <p>固件版本：{{ systemInfo.firmwareVersion }}</p>
        <p>运行时间：{{ systemInfo.uptime }}</p>
        <p>存储空间：{{ systemInfo.storage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SystemMaintenance',
    data() {
      return {
        systemInfo: {
          model: 'Camera Model X',
          firmwareVersion: '1.2.3',
          uptime: '3天 5小时 23分钟',
          storage: '已用 45% (45GB/100GB)'
        }
      }
    },
    methods: {
      restartDevice() {
        if (confirm('确定要重启设备吗？')) {
          console.log('重启设备')
          // 实现重启设备的逻辑
        }
      },
      resetToDefault() {
        if (confirm('确定要恢复出厂设置吗？这将删除所有自定义配置。')) {
          console.log('恢复出厂设置')
          // 实现恢复出厂设置的逻辑
        }
      },
      updateFirmware() {
        console.log('更新固件')
        // 实现更新固件的逻辑，可能需要打开一个文件选择对话框
      }
    }
  }
  </script>
  
  <style scoped>
  .maintenance-options {
    margin-bottom: 20px;
  }
  button {
    margin-right: 10px;
    padding: 10px 20px;
  }
  .system-info {
    text-align: left;
  }
  </style>