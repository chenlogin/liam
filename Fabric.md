Fabric.js 的主要事件和 API 的列举：
事件 (Events)
object:added：当对象被添加到画布时触发。 object:removed：当对象从画布中移除时触发。
object:modified：当对象被修改时触发（例如，改变尺寸、颜色等）。 object:moving：当对象正在移动时触发。
object:scaling：当对象正在缩放时触发。
object:rotating：当对象正在旋转时触发。
selection:created：当对象被选中时触发。
selection:updated：当选中对象集合发生变化时触发。
selection:cleared：当所有对象都被取消选中时触发。
mouse:down, mouse:move,mouse:up：分别对应鼠标按下、移动和松开事件。
mouse:wheel：鼠标滚轮事件，用于实现缩放等功能。
API
Canvas API
new fabric.Canvas(element)：创建一个新的 Fabric Canvas 实例。
canvas.add(object)：向 Canvas 添加一个对象。
canvas.remove(object)：从 Canvas 中移除一个对象。
canvas.setActiveObject(object)：设置当前活动的对象。
canvas.discardActiveObject()：取消当前活动的对象。
canvas.forEachObject(callback)：遍历 Canvas 上的所有对象。
canvas.renderAll()：重新渲染 Canvas 上的所有对象。
canvas.setBackgroundImage(image, callback)：设置 Canvas 的背景图像。
canvas.getZoom()用于获取当前 Canvas 的缩放级别。缩放级别是一个数值，表示 Canvas 相对于其原始大小（即未缩放时的大小）的放大或缩小比例。默认情况下，缩放级别为 1，表示 Canvas 显示为原始大小。如果缩放级别大于 1，则 Canvas 会放大显示；如果缩放级别小于 1 但大于 0，则 Canvas 会缩小显示。
canvas.setZoom(zoom)这个方法用于设置 Canvas 的缩放级别。通过传入一个数值参数 zoom，你可以改变 Canvas 的显示大小。与 canvas.getZoom() 类似，zoom 参数也是一个表示缩放比例的数值。当 zoom 大于 1 时，Canvas 会放大；当 zoom 小于 1 但大于 0 时，Canvas 会缩小
Object API
object.set(property, value)：设置对象的属性。
object.get(property)：获取对象的属性值。
object.moveTo(index)：将对象移动到指定索引位置。
object.left, object.top：获取或设置对象的左边和顶部位置。
object.width, object.height：获取或设置对象的宽度和高度。
object.scaleX, object.scaleY：获取或设置对象的水平和垂直缩放比例。
object.angle：获取或设置对象的旋转角度。
object.hasBorders, object.hasControls：控制对象是否显示边框和控制点。
object.selectable：控制对象是否可以被选中。
其他 API
fabric.Image.fromURL(url, callback)：从指定 URL 加载图像并创建一个 Fabric 图像对象。
fabric.util.enlargeBounds(object, padding)：增大对象的边界框。
fabric.util.getRandomInt(min, max)：生成指定范围内的随机整数。
