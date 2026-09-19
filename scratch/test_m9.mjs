import { SCRIPT_DATABASE } from '../src/data/contentData.js';

const m9 = SCRIPT_DATABASE['maysa_month9'];
if (m9) {
  console.log('maysa_month9 posts count:', m9.posts.length);
  m9.posts.slice(0, 3).forEach((p, i) => {
    console.log(`Post ${i+1}: title=${p.title || p.topic}`);
    console.log('Caption snippet:', (p.caption || '').slice(0, 150));
  });
}
