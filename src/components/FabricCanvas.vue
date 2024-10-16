<template>
  <div class="home">
    <div class="btnwrap">
      <div class="brushWidth">
        <label>画笔线条粗细:</label>
        <input v-model="width" type="range" name="vol" min="1" max="100" />
      </div>
      <div class="brushWidth">
        <label>字体大小:</label>
        <input v-model="fontSize" type="range" name="vol" min="18" max="50" />
      </div>
      <button class="freeDrawBtn" @click="freeDraw()">自由绘制</button>
      <button class="lineDrawBtn" @click="lineDraw()">直线</button>
      <button class="cricleDrawBtn" @click="circleDraw()">圆</button>
      <button class="rectDrawBtn" @click="rectDraw()">矩形</button>
      <button class="triangleDrawBtn" @click="triangleDraw()">三角形</button>
      <button class="textDrawBtn" @click="textDraw()">文本</button>
      <button class="imgDrawBtn" @click="imgDraw()">本地图片</button>
      <input id="uploadfile" type="file" accept="image/*" style="display: none" @change="uploadFile" />
      <button class="undoBtn" @click="undoDraw()">撤销</button>
      <button class="redoBtn" @click="redoDraw()">恢复</button>
      <button class="exportBtn" @click="exportCanvas()">导出</button>
      <button class="clearBtn" @click="clear()">清除</button>
      <button class="selectDrawBtn" @click="selectDraw()">可选中</button>
      <button class="selectDrawBtn" @click="unselectDraw()">不可选中</button>
    </div>
    <canvas id="canvas" width="1440" height="600"></canvas>
  </div>
</template>

<script>
// http://fabricjs.com/docs/fabric.Canvas.html
import { Canvas, PencilBrush, Image, Line, Circle, Rect, Triangle, Textbox } from 'fabric'

export default {
  data() {
    return {
      colors: '#FF6767',
      width: 3,
      strokeWidth: 3,
      fontSize: 18,
      canvas: null,
      pencilBrush: null,
      drawingObject: null, //最近一次要绘制对象
      textObject: null,
      mouseFrom: {},
      mouseTo: {},
      currentType: 'free',
      idDrawing: false,
      stateArr: [],
      isRedoing: false,
    }
  },
  watch: {
    width: function () {
      this.canvas.freeDrawingBrush.width = parseInt(this.width, 10)
      this.strokeWidth = parseInt(this.width, 10)
    },
  },
  mounted() {
    this.initfreeDraw()
    this.initEvent()
  },
  methods: {
    initfreeDraw() {
      this.canvas = new Canvas('canvas', {
        isDrawingMode: false, //是否启动绘画，如果为 true，则画布上的鼠标事件 （mousedown/mousemove/mouseup） 将导致自由绘制。在 mousedown 之后，mousemove 会创建一个形状，然后 mouseup 会完成该形状并添加 'fabric.Path“拖放到画布上。
        // width: '1440', //会受到 window.devicePixelRatio 影响
        // height: '600',
        backgroundColor: '#efefef',
      })

      //初始化画笔
      this.pencilBrush = new PencilBrush(this.canvas)
      this.canvas.freeDrawingBrush = this.pencilBrush
      this.canvas.freeDrawingBrush.color = this.colors
      this.canvas.freeDrawingBrush.width = this.width

      //重新渲染画布，lower-canvas、upper-canvas
      this.canvas.renderAll()
    },
    initEvent() {
      const eventType = ['line', 'circle', 'rect', 'triangle', 'text']
      this.canvas.on('mouse:down', options => {
        console.log('===mouse:down===')
        if (eventType.indexOf(this.currentType) != -1) {
          this.mouseFrom.x = options.e.clientX || options.viewportPoint.x
          this.mouseFrom.y = (options.e.clientY || options.viewportPoint.y) - 50
          this.idDrawing = true
          switch (this.currentType) {
            case 'text':
              this.initText()
              break
            default:
              break
          }
        }
      })
      this.canvas.on('mouse:move', options => {
        if (this.idDrawing && eventType.indexOf(this.currentType) != -1) {
          console.log('===mouse:move===')
          this.mouseTo.x = options.e.clientX || options.viewportPoint.x
          this.mouseTo.y = (options.e.clientY || options.viewportPoint.y) - 50
          switch (this.currentType) {
            case 'line':
              this.initLine()
              break
            case 'circle':
              this.initCircle()
              break
            case 'rect':
              this.initRect()
              break
            case 'triangle':
              this.initTriangle()
              break
            default:
              break
          }
        }
      })
      this.canvas.on('mouse:up', options => {
        if (eventType.indexOf(this.currentType) != -1) {
          console.log('===mouse:up===')
          this.mouseTo.x = options.e.clientX
          this.mouseTo.y = options.e.clientY - 50
          this.drawingObject = null
          this.idDrawing = false
          this.resetMove()
        }
      })
      //当对象被添加到画布时触发
      this.canvas.on('object:added', () => {
        if (this.isRedoing == false) {
          this.stateArr = []
        }
      })
    },
    freeDraw() {
      this.removeTextObject()
      this.canvas.isDrawingMode = true
      this.currentType = 'free'
    },
    lineDraw() {
      this.currentType = 'line'
      this.initLine()
    },
    circleDraw() {
      this.currentType = 'circle'
      this.initCircle()
    },
    rectDraw() {
      this.currentType = 'rect'
      this.initRect()
    },
    triangleDraw() {
      this.currentType = 'triangle'
      this.initTriangle()
    },
    textDraw() {
      this.currentType = 'text'
      this.canvas.isDrawingMode = false
      this.canvas.selection = false
      if (this.drawingObject) {
        this.canvas.remove(this.drawingObject)
      }
    },
    imgDraw() {
      document.getElementById('uploadfile').click()
    },
    uploadFile(e) {
      this.canvas.isDrawingMode = false
      this.removeTextObject()
      var file = e.target.files[0]
      var reader = new FileReader()
      reader.onload = e => {
        var data = e.target.result
        Image.fromURL(data, img => {
          this.canvas.add(img).renderAll()
        })
      }
      reader.readAsDataURL(file)
      e.target.value = ''
    },
    toggleDrawingObject(canvasObject) {
      this.canvas.isDrawingMode = false //绘画图形时关闭自由绘制
      this.canvas.selection = false //启用组选择
      canvasObject.selectable = false //是否可选择
      if (this.drawingObject) {
        //移除前一笔绘制的图形
        this.canvas.remove(this.drawingObject)
      }
      this.canvas.add(canvasObject)
      this.drawingObject = canvasObject

      if (this.textObject) {
        this.textObject.exitEditing()
        this.textObject = null
      }
    },
    initLine() {
      let canvasObject = new Line([this.mouseFrom.x, this.mouseFrom.y, this.mouseTo.x, this.mouseTo.y], {
        fill: this.colors,
        stroke: this.colors,
        strokeWidth: this.strokeWidth,
      })
      this.toggleDrawingObject(canvasObject)
    },
    initCircle() {
      let left = this.mouseFrom.x
      let top = this.mouseFrom.y
      let radius =
        Math.sqrt((this.mouseTo.x - left) * (this.mouseTo.x - left) + (this.mouseTo.y - top) * (this.mouseTo.y - top)) /
        2
      let canvasObject = new Circle({
        left: left,
        top: top,
        stroke: this.colors,
        fill: 'rgba(255, 255, 255, 0)',
        radius: radius,
        strokeWidth: this.strokeWidth,
      })
      this.toggleDrawingObject(canvasObject)
    },
    initRect() {
      let left = this.mouseFrom.x
      let top = this.mouseFrom.y
      let width = this.mouseTo.x - this.mouseFrom.x
      let height = this.mouseTo.y - this.mouseFrom.y
      let canvasObject = new Rect({
        left: left,
        top: top,
        width: width,
        height: height,
        stroke: this.colors,
        fill: 'rgba(255, 255, 255, 0)',
        strokeWidth: this.strokeWidth,
      })
      this.toggleDrawingObject(canvasObject)
    },
    initTriangle() {
      let left = this.mouseFrom.x
      let top = this.mouseFrom.y
      let height = this.mouseTo.y - this.mouseFrom.y
      let width = Math.sqrt(Math.pow(height, 2) + Math.pow(height / 2.0, 2))
      let canvasObject = new Triangle({
        left: left,
        top: top,
        width: width,
        height: height,
        stroke: this.colors,
        fill: 'rgba(255, 255, 255, 0)',
        strokeWidth: this.strokeWidth,
      })
      this.toggleDrawingObject(canvasObject)
    },
    initText() {
      this.canvas.isDrawingMode = false
      this.canvas.selection = false
      this.textObject = new Textbox('你好', {
        left: this.mouseFrom.x,
        top: this.mouseFrom.y,
        fontSize: this.fontSize,
        fill: this.colors,
        hasControls: false,
      })
      this.canvas.add(this.textObject)
      this.textObject.enterEditing()
      this.textObject.hiddenTextarea.focus()
    },
    undoDraw() {
      if (this.canvas._objects.length > 0) {
        this.stateArr.push(this.canvas._objects.pop())
        this.canvas.renderAll()
      }
    },
    redoDraw() {
      if (this.stateArr.length > 0) {
        this.isRedoing = true
        this.canvas.add(this.stateArr.pop())
        this.canvas.renderAll()
      }
    },
    resetMove() {
      this.mouseFrom = {}
      this.mouseTo = {}
    },
    removeTextObject() {
      this.currentType = ''
      if (this.textObject) {
        console.log('remove text')
        this.textObject.exitEditing()
        this.textObject = null
      }
    },
    clear() {
      this.canvas.clear()
      this.canvas.backgroundColor = '#efefef'
      this.resetMove()
      this.isRedoing = false
      this.stateArr = []
    },

    exportCanvas() {
      const dataURL = this.canvas.toDataURL({
        width: this.canvas.width,
        height: this.canvas.height,
        left: 0,
        top: 0,
        format: 'png',
      })
      const link = document.createElement('a')
      link.download = 'canvas.png'
      link.href = dataURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },

    selectDraw() {
      this.removeTextObject()
      this.canvas.getObjects().map(item => {
        item.set('selectable', true)
      })
    },
    unselectDraw() {
      this.removeTextObject()
      this.canvas.getObjects().map(item => {
        item.set('selectable', false)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.btnwrap {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .brushWidth {
    margin-left: 10px;
  }

  .freeDrawBtn,
  .lineDrawBtn,
  .cricleDrawBtn,
  .rectDrawBtn,
  .triangleDrawBtn,
  .textDrawBtn,
  .clearBtn,
  .selectDrawBtn,
  .imgDrawBtn,
  .undoBtn,
  .redoBtn,
  .exportBtn {
    margin-left: 10px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
