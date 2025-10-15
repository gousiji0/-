# Atlas Design Board

设计公司项目工作看板，支持项目管理、任务协同、时间轴与工作日志联动。现已升级为 Electron 桌面程序，可将数据及附件持久化到应用同级的 `storage` 目录，便于整理后直接打包交付。

## 本地开发

```bash
npm install
npm start
```

启动后会打开桌面程序窗口，所有项目、工作记录与附件会自动保存到 `storage/state.json` 与 `storage/attachments/`。

## 构建 Windows 可执行文件

```bash
npm run package
```

命令将使用 `electron-builder` 生成便携式 `.exe`，产物位于 `dist/Atlas-Design-Board-<version>.exe`。

## 数据与附件

- 项目与工作记录：`storage/state.json`
- 附件文件：`storage/attachments/`

可将上述文件夹直接随应用一同分发，实现重新打开后数据不丢失。
