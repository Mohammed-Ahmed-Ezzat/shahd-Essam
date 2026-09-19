import { SCRIPT_DATABASE } from '../src/data/contentData.js';

function detectScriptType(text) {
  if (!text) return 'empty';
  const t = text.trim();
  
  // Podcast check
  if (
    /الفكرة العامة/i.test(t) ||
    /المشهد التمثيلي/i.test(t) ||
    /محاور الحوار/i.test(t) ||
    /للمصور والمونتير/i.test(t) ||
    (/بودكاست/i.test(t) && (/الانترو/i.test(t) || /النهاية/i.test(t)))
  ) {
    return 'podcast';
  }

  // Reel check
  if (
    /(^|\n)[ \t]*(hook|intro|body|conclusion|conclusion line|end\s*line|cta|editor|for editor|الهوك|المقدمة|صلب الموضوع|الخاتمة)[ \t]*(:|\n|$)/i.test(t)
  ) {
    return 'reel';
  }

  // Multi-line post ideas check
  const lines = t.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length >= 3) {
    return 'post_ideas';
  }

  return 'general';
}

console.log('maysa_podcast ep2 type:', detectScriptType(SCRIPT_DATABASE['maysa_podcast'].episodes[1].script));
console.log('shereen_reels reel1 type:', detectScriptType(SCRIPT_DATABASE['shereen_reels'].reels[0].answer));
console.log('omar_qa reel1 type:', detectScriptType(SCRIPT_DATABASE['omar_qa'].reels[0].answer));
console.log('rehab_posts post1 type:', detectScriptType(SCRIPT_DATABASE['rehab_posts'].posts[0].caption));
console.log('maysa_month9 post1 type:', detectScriptType(SCRIPT_DATABASE['maysa_month9'].posts[0].caption));
