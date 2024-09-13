<template>
    <div class="network-config">
      <h2>网络配置</h2>
      <form @submit.prevent="saveConfig">
        <div class="form-group">
          <label for="ipAddress">IP地址：</label>
          <input type="text" id="ipAddress" v-model="config.ipAddress">
        </div>
        <div class="form-group">
          <label for="subnetMask">子网掩码：</label>
          <input type="text" id="subnetMask" v-model="config.subnetMask">
        </div>
        <div class="form-group">
          <label for="gateway">网关：</label>
          <input type="text" id="gateway" v-model="config.gateway">
        </div>
        <div class="form-group">
          <label for="dns">DNS：</label>
          <input type="text" id="dns" v-model="config.dns">
        </div>
        <button type="submit">保存配置</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NetworkConfig',
    data() {
      return {
        config: {
          ipAddress: '',
          subnetMask: '',
          gateway: '',
          dns: ''
        }
      }
    },
    methods: {
      saveConfig() {
        console.log('保存网络配置', this.config)
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