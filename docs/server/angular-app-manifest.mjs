
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TurboDimitri.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TurboDimitri.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 514, hash: '598f783bcfd12f21c814a9e14afe5447aa5a06e315efe67ac7b18b54306a0e33', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '641b421ed6f127f0ee145366be4a6ef1e796b4cb469c2420641aaab5f31fd878', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20853, hash: '947e2eb128cd3a5049114bd502129d34c95297d345f9fbcba40111de6431d2e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
