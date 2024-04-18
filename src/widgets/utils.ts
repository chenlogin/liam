export const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
export const lowerCaseLetter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
export const upperCaseLetter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
export const characters = ['大', '小', '天', '地', '黑', '白', '红', '绿', '蓝', '黄']
export const color = ['red', 'yellow', 'blue', 'green', 'grey', 'black', 'white']

const charactersCount = 4
let playing = false
const synth = window.speechSynthesis
const utterThis = new SpeechSynthesisUtterance()
/**
 * 随机生成4个字符
 */
export function generateRandomLetters(type = 'num') {
  const result: Array<string> = []
  let letters: Array<string> = []
  if (type == 'num') letters = numList

  for (let i = 0; i < charactersCount; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length)
    if (result.indexOf(letters[randomIndex]) == -1) {
      result.push(letters[randomIndex])
    } else {
      i--
    }
  }
  return result
}

export function playAudio(text: string, callback?: () => void) {
  //文字转语音，主要用到了两个api，speechSynthesis和SpeechSynthesisUtterance
  console.log(text)
  if (playing) {
    playing = false
    synth.cancel()
    return
  }

  // 播放介绍
  utterThis.onend = () => {
    playing = false
    callback && callback()
  }
  utterThis.onerror = () => {
    playing = false
    callback && callback()
  }

  utterThis.lang = 'zh-CN' // 'en-US'
  utterThis.text = text
  utterThis.rate = 0.8
  synth.speak(utterThis)

  playing = true
}
