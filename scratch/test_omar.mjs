import { SCRIPT_DATABASE } from '../src/data/contentData.js';

const omarEp = SCRIPT_DATABASE['omar_episodes'];
if (omarEp) {
  console.log('omar_episodes count:', omarEp.episodes.length);
  omarEp.episodes.forEach((ep, i) => {
    console.log(`Ep ${i+1}: ${ep.title}`);
    console.log('First 150 chars of script:', (ep.script || '').slice(0, 150));
  });
}
