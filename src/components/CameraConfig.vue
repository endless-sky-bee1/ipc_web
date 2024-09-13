<template>
    <div class="camera-config">
      <h2>摄像头配置</h2>
      <form @submit.prevent="saveConfig">
        <div class="form-group">
          <label for="resolution">分辨率：</label>
          <select id="resolution" v-model="config.resolution">
            <option value="640x480">640x480</option>
            <option value="1280x720">1280x720</option>
            <option value="1920x1080">1920x1080</option>
          </select>
        </div>
        <div class="form-group">
          <label for="frameRate">帧率：</label>
          <input type="number" id="frameRate" v-model="config.frameRate" min="1" max="60">
        </div>
        <div class="form-group">
          <label for="brightness">亮度：</label>
          <input type="range" id="brightness" v-model="config.brightness" min="0" max="100">
        </div>
        <div class="form-group">
          <label for="contrast">对比度：</label>
          <input type="range" id="contrast" v-model="config.contrast" min="0" max="100">
        </div>
        <button type="submit">保存配置</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CameraConfig',
    data() {
      return {
        config: {
          resolution: '1280x720',
          frameRate: 30,
          brightness: 50,
          contrast: 50
        }
      }
    },
    methods: {
      saveConfig() {
        console.log('保存摄像头配置', this.config)
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
  select, input[type="number"] {
    width: 200px;
  }
  input[type="range"] {
    width: 200px;
    vertical-align: middle;
  }
  </style>