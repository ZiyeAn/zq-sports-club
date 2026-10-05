export type Paddle = {
  id: string;
  name: string;
  series: string;
  type: string;
  thickness: string;
  price: string;
  image: string;
  summary: string;
  traits: string[];
};

export const siteSettings = {
  clubName: '众祺匹克球俱乐部',
  purchaseLabel: '网站内购买',
  hero: 'FIND YOUR PACE'
};

export const matches = [
  { name: 'PPA TOUR', type: '全球职业巡回赛', detail: '职业匹克球的高水平单打、双打与混双舞台。' },
  { name: 'MLP', type: '职业团体联赛', detail: '以团队阵容与紧凑赛制呈现不同的比赛张力。' },
  { name: 'APP TOUR', type: '公开赛与社区赛事', detail: '连接业余选手与更广泛竞赛体系的赛事网络。' }
];

export const learningArticles = [
  { slug: 'two-bounce', title: '两次落地，先把回合打开', summary: '发球与接发球必须各自先落地一次；之后才可以选择凌空截击或落地击球。', source: 'USA Pickleball · 基础规则' },
  { slug: 'kitchen-line', title: '厨房线不是禁区', summary: '你可以走进厨房，但站在厨房内或踩线时不能凌空截击。', source: 'USA Pickleball · 重要规则' },
  { slug: 'ready-position', title: '准备姿势：拍头向上', summary: '更短的动作，通常意味着更快的反应和更少的失误。', source: 'USA Pickleball · 初学基础' }
];

// Phase 1 local fallback. Phase 2 swaps this module for Strapi API responses.
export const paddles: Paddle[] = [
  { id: 'sophon-16', name: 'Sophon 16mm', series: 'Sophon', type: '控制 · 全场', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/7_5c268f22-9fa9-489a-bc47-9f8641a56884.jpg?v=1779173223', summary: '以控制为先的全泡棉球拍，手感柔和、容错高。', traits: ['控制', '容错', '双手反拍'] },
  { id: 'neon-dual', name: 'Neon Gen 3 · Dual Tone', series: 'Neon', type: '全场 · 竞赛', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_fb5e8368-74cd-4455-8b9b-5da0c956ec5b.jpg?v=1764580753', summary: '兼顾比赛与日常对打的全场型选择。', traits: ['平衡', '竞赛', '稳定'] },
  { id: 'phoenix-16', name: 'Phoenix 16mm', series: 'Phoenix', type: '力量 · 稳定', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_9d2e7016-11a5-4ec1-8bba-363d6518a697.jpg?v=1776096450', summary: '厚核心让力量型打法保留沉稳反馈。', traits: ['力量', '稳定', '进攻'] },
  { id: 'rhythm', name: 'Rhythm Hybrid', series: 'Rhythm', type: '混合 · 易上手', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_bfbdc58e-2d8f-416f-94da-05d90f4c8cf7.jpg?v=1764576247', summary: '控制、加速与上手节奏放在同一支拍子里。', traits: ['平衡', '容错', '全场'] },
  { id: 'sophon-wide', name: 'Sophon Wide Body', series: 'Sophon', type: '控制 · 宽体', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/3_c6d1b69c-7ce8-4337-a089-4a4c9ea2dc6d.jpg?v=1785137680', summary: '宽体击球面，把甜区与安心的容错感放在前面。', traits: ['控制', '宽体', '容错'] },
  { id: 'neon-triple', name: 'Neon Gen 3 · Triple Tone', series: 'Neon', type: '全场 · 竞赛', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_ee2b7e1f-9637-4c6a-a764-86a5fadc1380.jpg?v=1764579203', summary: '16mm 全场定位，强调实战中的稳定反馈。', traits: ['全场', '竞赛', '平衡'] },
  { id: 'phoenix-13', name: 'Phoenix 13.3mm', series: 'Phoenix', type: '力量 · 速度', thickness: '13.3mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_765e797f-1862-4cc7-9c63-605e95e82b9e.jpg?v=1776093981', summary: '偏向快速出球、主动进攻与直接反馈。', traits: ['力量', '速度', '进攻'] }
  ,{ id: 'nightblade-16', name: 'Nightblade 16mm', series: 'Nightblade', type: '控制 · 稳定', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_69193269-9bed-4cd0-ae68-17d064cc37c8.jpg?v=1764571966', summary: '偏稳定与缓冲的厚芯选择。', traits: ['控制', '稳定', '重置'] },
  { id: 'nightblade-14', name: 'Nightblade 14mm', series: 'Nightblade', type: '全场 · 直接', thickness: '14mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/6_9de1cd98-52d5-4554-956d-95a84c8a3c3b.jpg?v=1764571159', summary: '更直接的击球响应，适合主动提速。', traits: ['全场', '速度', '直接'] },
  { id: 'aether', name: 'Aether Hybrid', series: 'Aether', type: '混合 · 全场', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/Aethe-Paddle-1.webp?v=1777371564', summary: '面向全场打法的 Hybrid 选择。', traits: ['混合', '全场', '平衡'] },
  { id: 'rainbow', name: 'Rainbow Gen 3', series: 'Rainbow', type: '全场 · 旋转', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_54b35ee4-adb1-4930-bc22-68a7c50133b8.jpg?v=1775034610', summary: '适合在旋转、控制与加速之间切换。', traits: ['旋转', '控制', '全场'] },
  { id: 'ascent-power', name: 'Ascent Power', series: 'Ascent', type: '力量', thickness: '13 / 16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/ascent-red-pickleball-paddle-warping-point-carbon-fiber_35cd37d5-9846-4a6c-8e86-d80b7cd71970.jpg?v=1753091829', summary: '偏力量的入门价格选择。', traits: ['力量', '入门', '旋转'] },
  { id: 'ascent-control', name: 'Ascent Control', series: 'Ascent', type: '控制', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_1ca48afe-bb5e-4de2-84d3-5f433f3c45eb.jpg?v=1764297266', summary: '把落点与容错放在更前面的控制型入口。', traits: ['控制', '入门', '容错'] },
  { id: 'grasp', name: 'Grasp 16mm', series: 'Grasp', type: '平衡 · 入门', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/7_bf711825-3759-484f-8886-ca2bd4d9d056.jpg?v=1764568196', summary: '把稳定与易掌握放在首位。', traits: ['平衡', '入门', '稳定'] },
  { id: 'training', name: 'Training Paddle 16mm', series: 'Training', type: '训练 · 甜区', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/3_d3b54738-f9c2-44d3-be8b-f0f692d8acd1.jpg?v=1764644937', summary: '通过缩小击球面积，帮助校准甜区。', traits: ['训练', '甜区', '手眼协调'] },
  { id: 'rhythm-pink', name: 'Rhythm Hybrid · Pink', series: 'Rhythm', type: '混合 · 粉色', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_c1dbd259-f044-4864-a220-587ce391bb31.jpg?v=1789455721', summary: '混合型打法的粉色外观版本。', traits: ['混合', '平衡', '全场'] },
  { id: 'rhythm-red', name: 'Rhythm Hybrid · Red', series: 'Rhythm', type: '混合 · 红色', thickness: '16mm', price: '价格待后台维护', image: 'https://cdn.shopify.com/s/files/1/0688/9875/0696/files/1_f58743fa-ac14-4ceb-99c7-b919af5688eb.jpg?v=1789456027', summary: '混合型打法的红色外观版本。', traits: ['混合', '平衡', '全场'] }
];
