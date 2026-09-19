import { SCRIPT_DATABASE } from '../src/data/contentData.js';

function detectScriptType(text) {
  if (!text) return 'empty';
  const t = text.trim();
  
  if (
    /الفكرة العامة/i.test(t) ||
    /المشهد التمثيلي/i.test(t) ||
    /محاور الحوار/i.test(t) ||
    /للمصور والمونتير/i.test(t) ||
    (/بودكاست/i.test(t) && (/الانترو/i.test(t) || /النهاية/i.test(t)))
  ) {
    return 'podcast';
  }

  if (
    /(^|\n)[ \t]*(hook|intro|body|conclusion|conclusion line|end\s*line|cta|editor|for editor|الهوك|المقدمة|صلب الموضوع|الخاتمة)[ \t]*(:|\n|$)/i.test(t)
  ) {
    return 'reel';
  }

  const lines = t.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length >= 2) {
    return 'post_ideas';
  }

  return 'general';
}

const report = {};
for (const [key, item] of Object.entries(SCRIPT_DATABASE)) {
  const scripts = [];
  if (item.episodes) item.episodes.forEach(e => e.script && scripts.push(e.script));
  if (item.reels) item.reels.forEach(r => (r.answer || r.script) && scripts.push(r.answer || r.script));
  if (item.posts) item.posts.forEach(p => p.caption && scripts.push(p.caption));
  if (item.script) scripts.push(item.script);
  if (item.answer) scripts.push(item.answer);

  if (scripts.length > 0) {
    report[key] = scripts.map(s => detectScriptType(s));
  }
}

for (const [k, v] of Object.entries(report)) {
  const counts = v.reduce((acc, t) => { acc[t] = (acc[t] || 0) + 1; return acc; }, {});
  console.log(`${k}:`, counts);
}
