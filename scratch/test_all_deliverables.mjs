import { SCRIPT_DATABASE } from '../src/data/contentData.js';

console.log('Total deliverables in DB:', Object.keys(SCRIPT_DATABASE).length);

const summary = {};

for (const [key, item] of Object.entries(SCRIPT_DATABASE)) {
  const types = [];
  if (item.episodes) types.push(`episodes (${item.episodes.length})`);
  if (item.reels) types.push(`reels (${item.reels.length})`);
  if (item.posts) types.push(`posts (${item.posts.length})`);
  if (item.days) types.push(`days (${item.days.length})`);
  if (item.scenes) types.push(`scenes (${item.scenes.length})`);
  if (item.tables) types.push(`tables (${item.tables.length})`);
  if (item.images) types.push(`images (${item.images.length})`);
  if (item.script) types.push(`script (${item.script.length} chars)`);
  if (item.answer) types.push(`answer (${item.answer.length} chars)`);
  if (item.sheetUrl) types.push(`sheetUrl`);

  summary[key] = types.join(', ') || item.type || 'unknown';
}

console.log(summary);
