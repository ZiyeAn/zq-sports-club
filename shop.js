const grid = document.querySelector('#product-grid');
const productCard = (product) => `<article class="product-card" data-type="${product.type}"><a class="product-image" href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.name} 匹克球拍" loading="lazy"></a><div class="product-card-copy"><p>${product.series} <span>${product.thickness}</span></p><h3><a href="product.html?id=${product.id}">${product.name}</a></h3><small>${product.type}</small><strong>${product.price}</strong><a class="product-arrow" href="product.html?id=${product.id}" aria-label="查看 ${product.name} 的详情">↗</a></div></article>`;
if (grid) {
  grid.innerHTML = products.map(productCard).join('');
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
    document.querySelectorAll('.product-card').forEach((card) => { card.hidden = filter !== 'all' && !card.dataset.type.includes(filter); });
  }));
}
const detail = document.querySelector('#product-detail');
if (detail) {
  const product = products.find((item) => item.id === new URLSearchParams(location.search).get('id')) || products[0];
  document.title = `${product.name} · 众祺体育`;
  detail.innerHTML = `<section class="product-detail"><div class="detail-image"><img src="${product.image}" alt="${product.name} 匹克球拍"></div><article class="detail-copy"><p class="detail-series">${product.series} · ${product.type}</p><h1>${product.name}</h1><p class="detail-price">${product.price}<small>参考品牌公开标价</small></p><p class="detail-intro">${product.intro}</p><dl>${product.specs.map((spec) => `<div><dt>${spec}</dt></div>`).join('')}</dl><div class="detail-notes"><h2>为什么选它</h2>${product.details.map((note) => `<p>${note}</p>`).join('')}</div><a class="buy-source" href="${product.url}" target="_blank" rel="noreferrer">前往 Warping Point 查看原始商品页 <b aria-hidden="true">↗</b></a><p class="source-note">价格、库存、颜色和最终规格以原始商品页为准。</p></article></section>`;
}
