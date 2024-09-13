<template>
    <div class="device-config">
      <h2>设备配置</h2>
      <form @submit.prevent="saveConfig">
        <div class="form-group">
          <label for="deviceName">设备名称：</label>
          <input type="text" id="deviceName" v-model="config.deviceName">
        </div>
        <div class="form-group">
          <label for="deviceModel">设备型号：</label>
          <input type="text" id="deviceModel" v-model="config.deviceModel">
        </div>
        <div class="form-group">
          <label for="firmwareVersion">固件版本：</label>
          <input type="text" id="firmwareVersion" v-model="config.firmwareVersion">
        </div>
        <button type="submit">保存配置</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeviceConfig',
    data() {
      return {
        config: {
          deviceName: '',
          deviceModel: '',
          firmwareVersion: ''
        }
      }
    },
    methods: {
      saveConfig() {
        console.log('保存设备配置', this.config)
        // 实现保存配置到服务器的逻辑
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: inline-block;
    width: 100px;
  }
  input {
    width: 200px;
  }
  </style>