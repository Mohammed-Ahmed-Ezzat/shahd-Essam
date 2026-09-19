import { SCRIPT_DATABASE } from '../src/data/contentData.js';

const rehab = SCRIPT_DATABASE['rehab_posts'];
if (rehab) {
  console.log('Rehab posts count:', rehab.posts.length);
  const sample = rehab.posts[0];
  console.log('Sample title:', sample.title);
  const lines = sample.caption.split('\n').map(l => l.trim()).filter(Boolean);
  console.log('Lines in caption:', lines.length);
  lines.forEach((l, i) => console.log(`  ${i+1}: ${l}`));
}
