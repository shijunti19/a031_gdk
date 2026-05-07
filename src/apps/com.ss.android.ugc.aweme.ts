import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 30,
      name: '功能类-短剧自动上滑',
      desc: '检测到“上滑继续观看短剧”或“返回并退出”时自动上滑',
      rules: [
        {
          matches: [
            'TextView[text="上滑继续观看短剧"]',
            'TextView[text="返回并退出"]',
          ],
          // @ts-expect-error - swipe action 未在类型定义中声明
          action: 'swipe',
          swipeArg: {
            start: { x: 'screenWidth * 0.5', y: 'screenHeight * 0.82' },
            end: { x: 'screenWidth * 0.5', y: 'screenHeight * 0.25' },
            duration: 300,
          },
          fastQuery: true,
          matchTime: 3000,
          resetMatch: 'activity',
          activityIds: [
            'com.ss.android.ugc.aweme.playlet.videodetail.PlayletVideoPlayActivity',
          ],
        },
      ],
    },
  ],
});
