import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.topgether.sixfoot',
  name: '六只脚',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds: 'Pro.biz.record.RecordMainActivity',
          matches: '[id="android:id/content"] FrameLayout[index=1][childCount=1] > ImageView',
          exampleUrls: 'https://e.gkd.li/e15810d3-2b61-4918-aecd-f4d72cd8deeb',
          snapshotUrls: 'https://i.gkd.li/i/17265792',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-开通会员弹窗',
      fastQuery: true,
      activityIds: 'Pro.biz.home.ProMainActivity',
      rules: '[vid="iv_pay_vip"] + [vid="iv_close"]',
      exampleUrls: 'https://e.gkd.li/1a26e4b0-2445-4595-b003-4a3334ae2953',
      snapshotUrls: 'https://i.gkd.li/i/17265791',
    },
  ],
});
