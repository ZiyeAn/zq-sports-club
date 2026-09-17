const matches = [
  ['PPA TOUR', '全球职业巡回赛', '职业匹克球的高水平单打、双打与混双舞台'],
  ['MLP', '职业团体联赛', '以团队阵容与紧凑赛制呈现不同的比赛张力'],
  ['APP TOUR', '公开赛与社区赛事', '连接业余选手与更广泛竞赛体系的赛事网络']
];

const learning = [
  ['两次落地，先把回合打开', '发球与接发球必须各自先落地一次；之后才可以选择凌空截击或落地击球。', 'USA Pickleball · 基础规则', 'articles/two-bounce.html'],
  ['厨房线不是禁区', '你可以走进厨房，但站在厨房内或踩线时不能凌空截击；击球后的惯性带入也会构成失分。', 'USA Pickleball · 重要规则', 'articles/kitchen-line.html'],
  ['准备姿势：拍头向上', '把球拍放在胸前、肘部微微向前，并把引拍缩小。更短的动作，通常意味着更快的反应和更少的失误。', 'USA Pickleball · 初学基础', 'articles/ready-position.html'],
  ['从 Dink 到 Stacking', '把常听到的匹克球专有名词，放回真实的回合和站位里理解。', 'GLOSSARY · 术语表', 'articles/glossary.html']
];

document.querySelector('#match-list').innerHTML = matches.map(([name, type, detail]) => `<article class="list-row"><b>${name}</b><span>${type}</span><small>${detail}</small><em aria-hidden="true">↗</em></article>`).join('');
document.querySelector('#learn-list').innerHTML = learning.map(([title, detail, source, url]) => `<article class="story reveal"><p class="story-source">${source}</p><h3>${title}</h3><p>${detail}</p><a href="${url}">阅读文章 <span aria-hidden="true">↗</span></a></article>`).join('');

if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if (window.ScrollToPlugin) gsap.registerPlugin(window.ScrollToPlugin);
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.mast', { y: -16, autoAlpha: 0, duration: .45 })
    .from('.hero-copy > *', { y: 24, autoAlpha: 0, stagger: .1, duration: .65 }, '<.15')
    .from('.hero-court', { scale: .96, autoAlpha: 0, duration: .7 }, '<.1');
  gsap.to('.ball', { x: 18, y: -12, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  const sectionTargets = [...document.querySelectorAll('#matches, #learn, #gear, #edits')];
  const desktopQuery = matchMedia('(min-width: 761px)');
  let isSectionTweening = false;
  let scrollSettleTimer;

  const closestSectionIndex = () => sectionTargets.reduce((closest, section, index) => {
    const nextDistance = Math.abs(section.getBoundingClientRect().top);
    const closestDistance = Math.abs(sectionTargets[closest].getBoundingClientRect().top);
    return nextDistance < closestDistance ? index : closest;
  }, 0);

  const moveToSection = (index) => {
    const target = sectionTargets[Math.max(0, Math.min(index, sectionTargets.length - 1))];
    if (!target || isSectionTweening) return;
    isSectionTweening = true;
    gsap.to(window, {
      scrollTo: { y: target, offsetY: 0 },
      duration: 1.12,
      ease: 'power2.inOut',
      overwrite: 'auto',
      onComplete: () => { isSectionTweening = false; }
    });
  };

  const settleToNearbySection = () => {
    if (!desktopQuery.matches || isSectionTweening) return;
    const target = sectionTargets[closestSectionIndex()];
    const distance = Math.abs(target.getBoundingClientRect().top);
    if (distance > innerHeight * .18) return;
    moveToSection(sectionTargets.indexOf(target));
  };

  window.addEventListener('scroll', () => {
    if (!desktopQuery.matches || isSectionTweening) return;
    clearTimeout(scrollSettleTimer);
    scrollSettleTimer = setTimeout(settleToNearbySection, 230);
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target || !desktopQuery.matches) return;
      event.preventDefault();
      gsap.to(window, { scrollTo: { y: target, offsetY: 0 }, duration: 1.12, ease: 'power2.inOut', overwrite: 'auto' });
    });
  });
}
