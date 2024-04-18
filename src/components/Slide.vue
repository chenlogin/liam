<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div v-for="(video, index) in videoResources" :key="index" class="swiper-slide">
        <img :src="video.cover" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <Popup
    v-model:show="showPop"
    closeable
    position="bottom"
    :style="{
      height: '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem 10rem',
    }"
    @close="resetData">
    <Space direction="vertical">
      <Space wrap size="2rem" style="display: ruby-text">
        <Button type="default" :style="{ width: '6rem', height: '6rem', padding: '2rem', fontSize: '4rem' }">{{
          inputWords[0]
        }}</Button>
        <Button type="default" :style="{ width: '6rem', height: '6rem', padding: '2rem', fontSize: '4rem' }">{{
          inputWords[1]
        }}</Button>
        <Button type="default" :style="{ width: '6rem', height: '6rem', padding: '2rem', fontSize: '4rem' }">{{
          inputWords[2]
        }}</Button>
        <Button type="default" :style="{ width: '6rem', height: '6rem', padding: '2rem', fontSize: '4rem' }">{{
          inputWords[3]
        }}</Button>
      </Space>
      <Space wrap size="2rem">
        <Button
          v-for="(item, index) in numList"
          :key="index"
          hairline
          type="primary"
          :style="{ padding: '2rem', fontSize: '3rem', margin: '0 1rem' }"
          @click="checkCode(item)"
          >{{ item }}
        </Button>
      </Space>
    </Space>
  </Popup>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { videoResources } from '../constants'
import { Popup, Button, Space } from 'vant'
import { numList, generateRandomLetters, playAudio } from '../widgets/utils'

// const router = useRouter()
const showPop = ref(false)
const inputWords = ref<string[]>([])
let randomWords: Array<string> = []
let playingAudio = false
let activeIndex = 0
onMounted(() => {
  new window.Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      click: (swiper: { clickedIndex: number; activeIndex: number }) => {
        if (swiper.clickedIndex == swiper.activeIndex) {
          setTimeout(() => {
            showPop.value = true
            randomWords = generateRandomLetters()
            playingAudio = true
            activeIndex = swiper.activeIndex
            playAudio(`请依次按: ${randomWords.join(',')}`, () => {
              playingAudio = false
            })
            console.log('randomWords', randomWords)
          }, 200)
        }
      },
    },
  })
})
const checkCode = (item: string) => {
  if (playingAudio) {
    return
  }
  inputWords.value.push(item)
  console.log('inputWords', inputWords)
  if (inputWords.value.length == 4) {
    if (JSON.stringify(randomWords) === JSON.stringify(inputWords.value)) {
      resetData()
      //router.push({ path: '/play', query: { index: activeIndex } })
      window.open(videoResources[activeIndex].url)
      return
    }
    randomWords = generateRandomLetters()
    playingAudio = true
    playAudio(`输入错误, 请重新按: ${randomWords.join(',')}`, () => {
      playingAudio = false
      inputWords.value = []
    })
    console.log('randomWords', randomWords)
  }
}
const resetData = () => {
  inputWords.value = []
  randomWords = []
  playingAudio = false
  showPop.value = false
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  padding: 50px 0;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
