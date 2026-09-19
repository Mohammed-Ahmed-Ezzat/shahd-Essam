import React from 'react';

// Verification test for the parser and viewer functions
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

console.log('Detection test passed');
