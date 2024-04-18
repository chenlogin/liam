## 开发
```
yarn dev
```
注：prettier会对格式进行校验，控制台中显示警告信息。commit时自动格式化，但建议开发人员尽量自己手动修改警告。
## 构建
```
yarn build
```
## 提交代码
```
yarn commit
```
## 生成changelog
```
yarn changelog
```
## 目录结构
- 单页
```
├── public
├── index.html
├── src
│   ├── assets
│   ├── app.vue
│   ├── components
│   ├── common
│   │   ├── api
│   │   └── styles
│   ├── layouts
│   ├── main.ts
│   ├── router
│   ├── store
│   ├── style.scss
│   ├── widgets
│   │   └── request.ts
```
