<template>
  <div class="live-stream">
    <video 
      ref="videoPlayer" 
      autoplay 
      playsinline 
      controls
      muted
      preload="auto"
    >
      您的浏览器不支持HTML5视频。
    </video>
    <button class="config-button" @click="goToConfig">
      配置
    </button>
  </div>
</template>

<script>
import ZLMRTCClient from '../assets/ZLMRTCClient.js'

export default {
  data() {
    return {
      rtcClient: null,
      streamUrl: ''
    }
  },
  mounted() {
    this.initStreamUrl()
    this.startPlay()
  },
  methods: {
    initStreamUrl() {
      // 获取当前页面的主机名和端口
      const currentHost = window.location.hostname;
      const currentPort = window.location.port;

      // 构建streamUrl
      this.streamUrl = `http://${currentHost}:8088/index/api/webrtc?app=live&stream=test&type=play`;
      
      console.log('[LiveStream] initStreamUrl:', this.streamUrl);
    },
    initRTC() {
      console.log('[LiveStream] initRTC called, streamUrl:', this.streamUrl);
      
      if (!ZLMRTCClient) {
        console.error('[LiveStream] ZLMRTCClient is not defined. Please check if the library is correctly imported.');
        return;
      }

      try {
        this.rtcClient = new ZLMRTCClient.Endpoint({
          element: this.$refs.videoPlayer, // 视频元素的ref
          debug: true,
          zlmsdpUrl: this.streamUrl,
          simulcast: false,
          useCamera: false,
          audioEnable: false,
          videoEnable: true,
          recvOnly: true
        });

        this.rtcClient.on(ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, (e) => {
          console.log('[LiveStream] 播放成功', e.streams);
          // 添加检查，确保流被正确设置
          if (this.$refs.videoPlayer && e.streams && e.streams.length > 0) {
            this.$refs.videoPlayer.srcObject = e.streams[0];
          }
        });

        this.rtcClient.on(ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, (e) => {
          console.error('offer answer 交换失败', e)
          this.stopPlay()
        });

        // 添加更多错误处理
        this.rtcClient.on(ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, (e) => {
          console.error('ICE candidate error', e)
        });

        this.rtcClient.on(ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, (state) => {
          console.log('Connection state changed to:', state)
        });

        // 添加更多事件监听
        this.rtcClient.on(ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_FAILED, (e) => {
          console.error('[LiveStream] WebRTC connection failed', e);
        });

        this.rtcClient.on(ZLMRTCClient.Events.PEER_CONNECTION_STATE_FAILED, (e) => {
          console.error('[LiveStream] Peer connection state failed', e);
        });

      } catch (error) {
        console.error('[LiveStream] Error initializing ZLMRTCClient:', error);
      }
    },
    startPlay() {
      console.log('[LiveStream] startPlay called');
      if (this.rtcClient) {
        console.log('[LiveStream] Closing existing rtcClient');
        this.rtcClient.close()
      }
      this.initRTC()
      // 添加超时检查
      setTimeout(() => {
        if (!this.$refs.videoPlayer.srcObject) {
          console.error('[LiveStream] Video source not set after 5 seconds');
        }
      }, 5000);
    },
    stopPlay() {
      if (this.rtcClient) {
        this.rtcClient.close()
        this.rtcClient = null
        if (this.$refs.videoPlayer) {
          this.$refs.videoPlayer.srcObject = null
        }
      }
    },
    goToConfig() {
      // 假设配置页面的路由是'/config'
      this.$router.push('/config');
    }
  },
  beforeDestroy() {
    this.stopPlay()
  }
}
</script>

<style scoped>
.live-stream {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.config-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
}

.config-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>