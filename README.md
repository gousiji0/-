# Atlas Design Board

设计公司项目工作看板，支持项目管理、任务协同、时间轴与工作日志联动。现已升级为 Electron 桌面程序，可将数据及附件持久化到应用同级的
`storage` 目录，便于整理后直接打包交付。同时提供 Node.js 服务端脚本，部署在服务器上时会读取/写入与网页同目录的存档，实现多台设备共
享同一份工作记录。

## 本地开发

```bash
npm install
npm start
```

启动后会打开桌面程序窗口，所有项目、工作记录与附件会自动保存到 `storage/state.json` 与 `storage/attachments/`。开发模式下该目录位于项
目根目录；打包后的可执行文件会在同级目录生成并读取 `storage` 文件夹，实现随程序携带的数据持久化。

## 部署为共享网页

若将看板放置在服务器供多台电脑访问，可启用内置的 Node.js 服务：

```bash
npm install
npm run serve
```

服务器会监听 `3000` 端口，自动托管当前目录下的静态资源，并通过 `/api/state` 读取/写入 `storage/state.json`。所有访问者都会共享这份存
档，更新内容后立即持久化到网页同目录的 `storage` 文件夹，确保跨设备查看到同一版本的数据。

## 构建 Windows 可执行文件

```bash
npm run package
```

命令将使用 `electron-builder` 生成便携式 `.exe`，产物位于 `dist/Atlas-Design-Board-<version>.exe`。

## 数据与附件

- 项目与工作记录：`storage/state.json`
- 附件文件：`storage/attachments/`

可将上述文件夹直接随应用一同分发，实现重新打开后数据不丢失；若以网页形式部署，则服务器端也会在同级目录同步维护该文件与附件，便于
集中备份。
