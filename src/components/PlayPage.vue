<template>
  <div>
    <NavBar
      :title="title"
      left-text="返回"
      right-text="打开新页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight" />
    <iframe :src="url" width="600" height="400"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { NavBar } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { videoResources } from '../constants'

const route = useRoute()
const router = useRouter()
const title = ref('')
const url = ref('')

const index = route.query.index as string
const currrentData = videoResources[parseInt(index)]

onMounted(() => {
  title.value = currrentData.name
  url.value = currrentData.url
})

const onClickLeft = () => {
  router.push('/')
}
const onClickRight = () => {
  window.open(url.value)
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 100vh;
}
</style>
