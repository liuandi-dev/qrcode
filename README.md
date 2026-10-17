# 🔗 二维码生成器

> 100 项目挑战 · 项目 #011 · 2026-10-17 · 本项目方案由 Andy 自己撰写（Day 3 练习）

输入网址 → 一键生成二维码 → 保存为 PNG 图片。无协议时自动补 `https://`，回车可直接生成。

## 文件结构

```
qrcode/
├── index.html     页面结构
├── style.css      样式
├── script.js      逻辑（生成 + 保存）
└── qrcode.min.js  开源二维码库（qrcodejs，MIT 协议，本地内置不依赖网络）
```

## 怎么改

- **改二维码尺寸**：改 `script.js` 顶部的 `QR_SIZE`
- **改下载文件名**：改 `saveImage()` 里的 `link.download`

## 本地预览

双击 `index.html` 即可。

## 在线地址

https://liuandi-dev.github.io/qrcode/
