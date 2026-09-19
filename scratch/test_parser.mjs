import { SCRIPT_DATABASE } from '../src/data/contentData.js';

const maysaPodcast = SCRIPT_DATABASE['maysa_podcast'];
if (!maysaPodcast) {
  console.log('maysa_podcast not found in SCRIPT_DATABASE');
  process.exit(1);
}

const sectionPatterns = [
  { key: 'concept', match: /^(الفكرة العامة|فكرة الحلقة):?/i, title: 'الفكرة العامة' },
  { key: 'dramaticScene', match: /^(المشهد التمثيلي|مشهد تمثيلي|مشهد البداية)/i, title: 'المشهد التمثيلي' },
  { key: 'directorNotes', match: /^(للمصور والمونتير|ملاحظات المخرج والمونتير|توجيهات التصوير والمونتاج):?/i, title: 'للمصور والمونتير' },
  { key: 'intro', match: /^(الانترو|المقدمة|انترو الحلقة):?/i, title: 'الانترو' },
  { key: 'discussionPillars', match: /^(محاور الحوار|أثناء الحوار|محاور النقاش|الأسئلة):?/i, title: 'محاور الحوار' },
  { key: 'ending', match: /^(النهاية|خاتمة الحلقة|الختام):?/i, title: 'النهاية' },
  { key: 'interactiveCta', match: /^(CTA التفاعلي|الدعوة التفاعلية|سؤال التفاعل):?/i, title: 'CTA التفاعلي' },
  { key: 'commercialCta', match: /^(CTA البيعي|CTA التجاري|الدعوة للعمل|الدعوة التجارية):?/i, title: 'CTA البيعي' }
];

function parsePodcast(script) {
  const lines = script.split('\n').map(l => l.trim()).filter(Boolean);
  const result = {
    title: '',
    sections: []
  };

  let currentSec = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if line matches section header
    const matched = sectionPatterns.find(p => p.match.test(line));
    if (matched) {
      currentSec = {
        key: matched.key,
        title: line,
        lines: []
      };
      result.sections.push(currentSec);
      continue;
    }

    if (!currentSec) {
      if (!result.title && (line.includes('بودكاست') || line.includes('حلقة'))) {
        result.title = line;
      } else {
        if (!result.headerLines) result.headerLines = [];
        result.headerLines.push(line);
      }
    } else {
      currentSec.lines.push(line);
    }
  }

  return result;
}

maysaPodcast.episodes.forEach((ep, idx) => {
  console.log(`\n=== Episode ${idx + 1}: ${ep.title} ===`);
  const parsed = parsePodcast(ep.script);
  console.log('Title detected:', parsed.title);
  console.log('Sections found:', parsed.sections.map(s => `${s.key} (${s.lines.length} lines)`));
});
