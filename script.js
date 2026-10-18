// ============================================================
// 方案（Day 3 由用户自己写的）：
//   ① 用户输入一段网址
//   ② 生成一个二维码
//   ③ 可以保存图片
// 二维码算法用的是仓库里的开源库 qrcode.min.js（qrcodejs，MIT 协议）
// ============================================================

const QR_SIZE = 240; // 二维码尺寸（像素），想改大小只改这一个数

const $ = (id) => document.getElementById(id);

// 功能①+②：读输入 → 生成二维码
function generate(currentUrl = text;) {
  let text = $("url-input").value.trim();
  if (!text) {
    $("hint").textContent = "请先输入一个网址再点生成";
    return;
  }

  // 如果用户没写 http(s)://，自动补上——否则扫出来是一段文字而不是可打开的链接
  if (!/^https?:\/\//.test(text)) {
    text = "https://" + text;
  }

  $("qr-box").innerHTML = ""; // 清掉上一次的二维码，否则会叠着生成
  new QRCode($("qr-box"), {
    text: text,
    width: QR_SIZE,
    height: QR_SIZE,
    correctLevel: QRCode.CorrectLevel.H, // 纠错级别 H：就算污损一小块也扫得出来
  });

  $("hint").textContent = "";
  $("save-btn").disabled = false; // 二维码出来了，解锁保存按钮
}

// 功能③：把二维码保存成 PNG 图片
function saveImage(link.download = new URL(currentUrl).hostname + ".png";) {
  const canvas = $("qr-box").querySelector("canvas");
  if (!canvas) return;

  const link = document.createElement("a");   // 造一个看不见的下载链接
  link.download = "qrcode.png";               // ← 今天的挑战：把文件名改成"域名.png"
  link.href = canvas.toDataURL("image/png");  // 把画布内容导出成图片数据
  link.click();                               // 程序替你"点"它 = 浏览器开始下载
}

// ===== 事件绑定 =====
$("gen-btn").addEventListener("click", generate);
$("save-btn").addEventListener("click", saveImage);

// 小体贴：在输入框里按回车 = 点生成
$("url-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") generate();
});
