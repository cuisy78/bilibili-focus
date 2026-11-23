// ==UserScript==
// @name         B站防沉迷：去首页推荐
// @namespace    https://github.com/cuisy78/bilibili-focus
// @version      1.2.0
// @description  只想用 B 站搜视频、不想被推荐带跑？打开首页直接跳到搜索页；隐藏视频页的推荐列表、播完推荐和搜索热搜（保留分P/合集列表）；视频页自动宽屏。
// @author       cuisy78
// @license      MIT
// @homepageURL  https://github.com/cuisy78/bilibili-focus
// @supportURL   https://github.com/cuisy78/bilibili-focus/issues
// @icon         https://www.bilibili.com/favicon.ico
// @match        *://www.bilibili.com/*
// @match        *://search.bilibili.com/*
// @run-at       document-start
// @noframes
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // 1. 首页 → 直接跳到搜索页（搜索页本身没有推荐视频）
  const path = location.pathname;
  if (location.hostname === 'www.bilibili.com' && (path === '/' || path === '/index.html')) {
    location.replace('https://search.bilibili.com/');
    return;
  }

  // 2. 隐藏推荐相关区域
  //    注意：不能隐藏 .rcmd-tab —— 分P/合集列表 (.video-pod) 也在它里面
  const css = `
    /* 视频页右侧：推荐列表、"接下来播放" */
    .recommend-list-v1,
    .rec-list,
    .next-play,
    /* 视频播完后弹出的推荐 */
    .bpx-player-ending-panel,
    /* 视频页右侧广告 */
    #slide_ad,
    .video-card-ad-small,
    .right-bottom-banner,
    .ad-floor-exp,
    /* 搜索框下拉里的热搜 */
    .search-panel .trending {
      display: none !important;
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  // 3. 视频页自动切到宽屏，填满推荐列表被隐藏后留下的空白
  if (/^\/(video|list)\//.test(path)) {
    let tries = 0;
    const timer = setInterval(() => {
      const player = document.querySelector('.bpx-player-container');
      const wideBtn = document.querySelector('.bpx-player-ctrl-wide');
      if (player && wideBtn) {
        if (player.getAttribute('data-screen') === 'normal') wideBtn.click();
        clearInterval(timer);
      } else if (++tries > 40) {
        clearInterval(timer); // 20 秒还没找到播放器就放弃
      }
    }, 500);
  }
})();
