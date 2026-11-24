# B站防沉迷：去首页推荐

只想用 B 站**搜**视频，不想被**推荐**带着一个接一个刷下去？这个油猴脚本把 B 站的推荐入口关掉，只留下搜索。

## 功能

- **首页直接跳到搜索页**：打开 `bilibili.com` 会自动跳到 `search.bilibili.com`，那里只有一个搜索框，看不到推荐视频流。
- **视频页不再推荐**：隐藏右侧的推荐列表和"接下来播放"。**分P / 合集列表会保留**，系列视频照常看。
- **播完不再推荐**：隐藏视频结束时弹出的推荐视频。
- **自动关掉"自动连播"**：看完一个视频不会自动跳到推荐视频（分P / 合集自己的连播不受影响）。
- **搜索框不显示热搜**：点搜索框时不再弹出热搜榜。
- **视频页自动宽屏**：推荐列表藏掉后右边会空出一大块，所以自动切成宽屏，页面更好看。
- 顺手隐藏视频页右侧的几处广告。

## 安装

1. 先装一个用户脚本管理器，比如 [篡改猴 Tampermonkey](https://www.tampermonkey.net/)。
   - Edge / Chrome 用户：如果装了篡改猴但脚本不生效，打开 `edge://extensions`（或 `chrome://extensions`），把左下角/右上角的"开发人员模式"打开。
2. 安装脚本：
   - **推荐**：在 Greasy Fork 安装 → [B站防沉迷：去首页推荐](https://greasyfork.org/zh-CN/scripts/606890)（打开后点「安装此脚本」）
   - 或者直接从 GitHub 安装：[点这里安装](https://github.com/cuisy78/bilibili-focus/raw/main/bilibili-focus.user.js)

## 建议的配套设置

- 想临时看一眼首页：点篡改猴图标，把本脚本关掉再刷新即可。

## 已知限制

- B 站经常改版，页面结构变了以后某些区域可能藏不住。遇到问题欢迎在 [Issues](https://github.com/cuisy78/bilibili-focus/issues) 里反馈，最好附上视频链接和截图。
- 只处理网页版（www.bilibili.com、search.bilibili.com），不影响手机 App。
- 动态页、个人空间、热门/排行榜等页面暂未处理。

## 更新日志

见 [CHANGELOG.md](CHANGELOG.md)。

## 协议

[MIT](LICENSE)
