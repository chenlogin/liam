<template>
  <div class="main">
    <Slide></Slide>
  </div>
  <div class="bg" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Slide from './Slide.vue'
import { bgImages } from '../constants'

const backgroundImage = ref('')

onMounted(async () => {
  const randomIndex = Math.floor(Math.random() * bgImages.length)
  backgroundImage.value = bgImages[randomIndex]
})
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.bg {
  background-image: url('https://cdn-cnc.17zuoye.cn/fs-resource/66101214f11c4e691bb141ed.png');
  background-position: center;
  background-repeat: no-repeat; /* 防止图像重复 */
  background-size: cover; /* 使图像覆盖整个元素 */
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
}
</style>
