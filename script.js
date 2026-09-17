const matches = [
  ['PPA TOUR', '全球职业巡回赛', '职业匹克球的高水平单打、双打与混双舞台'],
  ['MLP', '职业团体联赛', '以团队阵容与紧凑赛制呈现不同的比赛张力'],
  ['APP TOUR', '公开赛与社区赛事', '连接业余选手与更广泛竞赛体系的赛事网络']
];

const learning = [
  ['两次落地，先把回合打开', '发球与接发球必须各自先落地一次；之后才可以选择凌空截击或落地击球。', 'USA Pickleball · 基础规则', 'https://usapickleball.org/pickleball-skills/level-one/the-basics-of-pickleball/'],
  ['厨房线不是禁区', '你可以走进厨房，但站在厨房内或踩线时不能凌空截击；击球后的惯性带入也会构成失分。', 'USA Pickleball · 重要规则', 'https://usapickleball.org/pickleball-skills/level-one/most-important-rules-to-start-playing-pickleball/'],
  ['准备姿势：拍头向上', '把球拍放在胸前、肘部微微向前，并把引拍缩小。更短的动作，通常意味着更快的反应和更少的失误。', 'USA Pickleball · 初学基础', 'https://usapickleball.org/pickleball-skills/level-one/pickleball-fundamentals-for-beginners/']
];

document.querySelector('#match-list').innerHTML = matches.map(([name, type, detail]) => `<article class="list-row"><b>${name}</b><span>${type}</span><small>${detail}</small><em aria-hidden="true">↗</em></article>`).join('');
document.querySelector('#learn-list').innerHTML = learning.map(([title, detail, source, url]) => `<article class="story reveal"><p class="story-source">${source}</p><h3>${title}</h3><p>${detail}</p><a href="${url}" target="_blank" rel="noopener noreferrer">查看原始资料 <span aria-hidden="true">↗</span></a></article>`).join('');

if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.mast', { y: -16, autoAlpha: 0, duration: .45 })
    .from('.hero-copy > *', { y: 24, autoAlpha: 0, stagger: .1, duration: .65 }, '<.15')
    .from('.hero-court', { scale: .96, autoAlpha: 0, duration: .7 }, '<.1');
  gsap.to('.ball', { x: 18, y: -12, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
}
