import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Table,
  ExternalLink,
  Clock,
  Volume2,
  Eye,
  Film,
  Sparkles,
  Layers,
  ChevronDown,
  FileSpreadsheet,
  MapPin,
  Sparkle,
  Clapperboard,
  Flame,
  CheckCircle2,
  Podcast,
  Lightbulb,
  MessageSquare,
  HelpCircle,
  Camera,
  Scissors,
  Mic,
  Quote,
  ArrowRight,
  Info,
  Check,
  Share2
} from 'lucide-react';
import { SCRIPT_DATABASE } from '../data/contentData';

/* =========================================================================
   SMART CONTENT PARSERS & STRUCTURED SECTION VIEWERS
   Prevents unformatted text walls across all portfolio folders & deliverables
   ========================================================================= */

// 1. Detect content type
function detectScriptType(text) {
  if (!text) return 'empty';
  const t = text.trim();

  // Podcast Check
  if (
    /الفكرة العامة/i.test(t) ||
    /المشهد التمثيلي/i.test(t) ||
    /محاور الحوار/i.test(t) ||
    /للمصور والمونتير/i.test(t) ||
    (/بودكاست/i.test(t) && (/الانترو/i.test(t) || /النهاية/i.test(t)))
  ) {
    return 'podcast';
  }

  // Reel Video Script Check
  if (
    /(^|\n)[ \t]*(hook|intro|body|conclusion|conclusion line|end\s*line|cta|editor|for editor|الهوك|المقدمة|صلب الموضوع|الخاتمة)[ \t]*(:|\n|$)/i.test(t)
  ) {
    return 'reel';
  }

  // Multi-line Post Ideas or Offer Bullets Check
  const lines = t.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length >= 2) {
    return 'post_ideas';
  }

  return 'general';
}

/* =========================================================================
   A. PODCAST EPISODE PARSER & VIEWER (e.g. maysa_podcast)
   ========================================================================= */
const PODCAST_SECTION_PATTERNS = [
  { key: 'concept', match: /^(الفكرة العامة|فكرة الحلقة):?/i, title: 'الفكرة العامة للحلقة' },
  { key: 'dramaticScene', match: /^(المشهد التمثيلي|مشهد تمثيلي|مشهد البداية)/i, title: 'المشهد التمثيلي الافتتاحي' },
  { key: 'directorNotes', match: /^(للمصور والمونتير|ملاحظات المخرج والمونتير|توجيهات التصوير والمونتاج):?/i, title: 'توجيهات التصوير والمونتاج' },
  { key: 'intro', match: /^(الانترو|المقدمة|انترو الحلقة):?/i, title: 'انترو البودكاست وبداية الحوار' },
  { key: 'discussionPillars', match: /^(محاور الحوار|أثناء الحوار|محاور النقاش|الأسئلة):?/i, title: 'محاور وأسئلة النقاش الأساسية' },
  { key: 'ending', match: /^(النهاية|خاتمة الحلقة|الختام):?/i, title: 'ختام الحلقة والرسالة الجوهرية' },
  { key: 'interactiveCta', match: /^(CTA التفاعلي|الدعوة التفاعلية|سؤال التفاعل):?/i, title: 'سؤال التفاعل والكومنتات' },
  { key: 'commercialCta', match: /^(CTA البيعي|CTA التجاري|الدعوة للعمل|الدعوة التجارية):?/i, title: 'الدعوة للاستشارة وحجز الجلسات' }
];

function parsePodcastScript(script) {
  const lines = script.split('\n').map(l => l.trim()).filter(Boolean);
  const result = {
    title: '',
    sections: []
  };

  let currentSec = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const matched = PODCAST_SECTION_PATTERNS.find(p => p.match.test(line));

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
      }
    } else {
      currentSec.lines.push(line);
    }
  }

  return result;
}

function PodcastEpisodeViewer({ scriptText }) {
  const parsed = parsePodcastScript(scriptText);

  return (
    <div className="space-y-4" dir="rtl" style={{ textAlign: 'right' }}>
      {/* Episode Title Header if present */}
      {parsed.title && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.16), rgba(168, 85, 247, 0.08))',
          border: '1.5px solid rgba(236, 72, 153, 0.35)',
          borderRadius: '14px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          boxShadow: '0 4px 20px rgba(236, 72, 153, 0.12)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(236, 72, 153, 0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F472B6'
            }}>
              <Podcast className="w-5 h-5" />
            </div>
            <h4 style={{ margin: 0, color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800 }}>
              {parsed.title}
            </h4>
          </div>
          <span style={{
            fontSize: '0.76rem',
            fontWeight: 800,
            color: '#F472B6',
            background: 'rgba(236, 72, 153, 0.15)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            padding: '3px 10px',
            borderRadius: '6px'
          }}>
            سكريبت حلقة بودكاست تفصيلي
          </span>
        </div>
      )}

      {/* Render Each Section in its own customized, comfortable card */}
      {parsed.sections.map((sec, sIdx) => {
        // 1. Concept Card
        if (sec.key === 'concept') {
          return (
            <div key={sIdx} style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.04))',
              border: '1.5px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span style={{ color: '#FBBF24', fontSize: '0.82rem', fontWeight: 800 }}>
                  الفكرة العامة للحلقة (Core Concept)
                </span>
              </div>
              <p style={{ margin: 0, color: '#FEF9C3', fontSize: '1.02rem', fontWeight: 600, lineHeight: 1.85 }}>
                {sec.lines.join(' ')}
              </p>
            </div>
          );
        }

        // 2. Opening Dramatic Scene Card
        if (sec.key === 'dramaticScene') {
          return (
            <div key={sIdx} style={{
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1.5px solid rgba(99, 102, 241, 0.28)',
              borderRadius: '14px',
              padding: '18px 20px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clapperboard className="w-4 h-4 text-indigo-400" />
                  <span style={{ color: '#A5B4FC', fontSize: '0.84rem', fontWeight: 800 }}>
                    {sec.title || 'المشهد التمثيلي الافتتاحي'}
                  </span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#CBD5E1', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '2px 8px', borderRadius: '6px' }}>
                  ⏱️ 20–30 ثانية تمثيل واقعي
                </span>
              </div>

              <div className="space-y-2.5">
                {sec.lines.map((line, lIdx) => {
                  const isSceneSetting = /^المشهد:/i.test(line);
                  const isLastShot = /^آخر لقطة:/i.test(line);
                  const isCut = /^Cut\.?$/i.test(line.trim());
                  const isDialogueQuote = /^["«]/i.test(line) || /["»]$/i.test(line);
                  const isSpeakerPrompt = /(هي تسأله|يرد|تسكت|بعدها تلاحظ|المهم:)/i.test(line);

                  if (isSceneSetting) {
                    return (
                      <div key={lIdx} style={{
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        color: '#E0E7FF',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{line}</span>
                      </div>
                    );
                  }

                  if (isCut) {
                    return (
                      <div key={lIdx} style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                        <span style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: '1px solid rgba(239, 68, 68, 0.35)',
                          color: '#FCA5A5',
                          fontWeight: 800,
                          fontSize: '0.76rem',
                          padding: '4px 14px',
                          borderRadius: '20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          🎬 Cut مفاجئ إلى د. مايسا وزوجها بالأستوديو
                        </span>
                      </div>
                    );
                  }

                  if (isLastShot) {
                    return (
                      <div key={lIdx} style={{
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px dashed rgba(245, 158, 11, 0.3)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        color: '#FDE68A',
                        fontSize: '0.9rem',
                        fontWeight: 650
                      }}>
                        <span style={{ color: '#F59E0B', fontWeight: 800, display: 'block', marginBottom: '2px', fontSize: '0.76rem' }}>
                          📸 توجيه اللقطة الختامية:
                        </span>
                        {line.replace(/^آخر لقطة:?/i, '').trim()}
                      </div>
                    );
                  }

                  if (isDialogueQuote) {
                    return (
                      <div key={lIdx} style={{
                        margin: '6px 0 6px 20px',
                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.14), rgba(168, 85, 247, 0.08))',
                        borderRight: '3px solid #EC4899',
                        borderRadius: '8px',
                        padding: '8px 14px',
                        color: '#FFFFFF',
                        fontSize: '0.98rem',
                        fontWeight: 750,
                        display: 'inline-block',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}>
                        {line}
                      </div>
                    );
                  }

                  if (isSpeakerPrompt) {
                    return (
                      <p key={lIdx} style={{ margin: '6px 0 2px 0', color: '#94A3B8', fontSize: '0.88rem', fontWeight: 600 }}>
                        {line}
                      </p>
                    );
                  }

                  return (
                    <p key={lIdx} style={{ margin: '4px 0', color: '#CBD5E1', fontSize: '0.94rem', lineHeight: 1.75 }}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        }

        // 3. Director & Camera Brief Card
        if (sec.key === 'directorNotes') {
          return (
            <div key={sIdx} style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95))',
              border: '1.5px dashed rgba(56, 189, 248, 0.35)',
              borderRadius: '14px',
              padding: '16px 20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Camera className="w-4 h-4 text-sky-400" />
                <span style={{ color: '#38BDF8', fontSize: '0.82rem', fontWeight: 800 }}>
                  🎥 توجيهات المخرج والمونتير (Director & Camera Brief)
                </span>
              </div>
              <div className="space-y-2">
                {sec.lines.map((line, lIdx) => (
                  <div key={lIdx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '8px 12px'
                  }}>
                    <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', marginTop: '2px' }}>•</span>
                    <span style={{ color: '#E2E8F0', fontSize: '0.9rem', lineHeight: 1.65 }}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // 4. Intro Section Card
        if (sec.key === 'intro') {
          return (
            <div key={sIdx} style={{
              background: 'rgba(14, 165, 233, 0.07)',
              border: '1.5px solid rgba(56, 189, 248, 0.28)',
              borderRadius: '14px',
              padding: '18px 20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Mic className="w-4 h-4 text-sky-400" />
                <span style={{ color: '#38BDF8', fontSize: '0.82rem', fontWeight: 800 }}>
                  🎙️ انترو البودكاست وبداية الحوار (Intro & Dialogue Hook)
                </span>
              </div>
              <div className="space-y-2.5">
                {sec.lines.map((line, lIdx) => {
                  const isMaysa = /^(د\.\s*مايسا|مايسا):/i.test(line);
                  const isHusband = /^(الزوج|جوزها):/i.test(line);
                  const isTransition = /^(ثم|بعد المشهد|وبعدها):/i.test(line);

                  if (isMaysa) {
                    return (
                      <div key={lIdx} style={{
                        background: 'rgba(236, 72, 153, 0.09)',
                        border: '1px solid rgba(236, 72, 153, 0.25)',
                        borderRadius: '10px',
                        padding: '10px 14px'
                      }}>
                        <span style={{ color: '#F472B6', fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                          🎙️ د. مايسا (Host):
                        </span>
                        <p style={{ margin: 0, color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 650, lineHeight: 1.8 }}>
                          {line.replace(/^(د\.\s*مايسا|مايسا):?/i, '').trim()}
                        </p>
                      </div>
                    );
                  }

                  if (isHusband) {
                    return (
                      <div key={lIdx} style={{
                        background: 'rgba(56, 189, 248, 0.09)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        borderRadius: '10px',
                        padding: '10px 14px'
                      }}>
                        <span style={{ color: '#38BDF8', fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                          🎙️ الزوج (Co-Host):
                        </span>
                        <p style={{ margin: 0, color: '#F0F9FF', fontSize: '0.98rem', fontWeight: 650, lineHeight: 1.8 }}>
                          {line.replace(/^(الزوج|جوزها):?/i, '').trim()}
                        </p>
                      </div>
                    );
                  }

                  if (isTransition) {
                    return (
                      <div key={lIdx} style={{ color: '#94A3B8', fontSize: '0.84rem', fontWeight: 600, padding: '2px 6px' }}>
                        {line}
                      </div>
                    );
                  }

                  return (
                    <p key={lIdx} style={{ margin: '4px 0', color: '#E2E8F0', fontSize: '0.94rem', lineHeight: 1.75 }}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        }

        // 5. Discussion Pillars Card (Grid of Questions)
        if (sec.key === 'discussionPillars') {
          const introLines = [];
          const questions = [];
          const noteLines = [];
          let foundNote = false;

          sec.lines.forEach(l => {
            if (/^(مهم جدًا|ملاحظة هامة|توجيه):?/i.test(l)) {
              foundNote = true;
            }
            if (foundNote) {
              noteLines.push(l);
            } else if (/(\?|؟)$/.test(l.trim()) || questions.length > 0) {
              questions.push(l);
            } else {
              introLines.push(l);
            }
          });

          return (
            <div key={sIdx} style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1.5px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '14px',
              padding: '18px 20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <span style={{ color: '#C084FC', fontSize: '0.84rem', fontWeight: 800 }}>
                    💬 محاور وأسئلة النقاش الأساسية (Discussion Pillars)
                  </span>
                </div>
                {questions.length > 0 && (
                  <span style={{ fontSize: '0.74rem', color: '#C084FC', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    {questions.length} محاور للنقاش
                  </span>
                )}
              </div>

              {introLines.length > 0 && (
                <div style={{ color: '#94A3B8', fontSize: '0.86rem', marginBottom: '12px', fontStyle: 'italic' }}>
                  {introLines.join(' ')}
                </div>
              )}

              {/* Responsive 2-Column Grid of Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {questions.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                    }}
                    className="hover:border-purple-500/40 hover:bg-white/5"
                  >
                    <span style={{
                      background: 'rgba(168, 85, 247, 0.18)',
                      color: '#D8B4FE',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '2px 7px',
                      borderRadius: '6px',
                      shrink: 0,
                      marginTop: '2px'
                    }}>
                      {String(qIdx + 1).padStart(2, '0')}
                    </span>
                    <p style={{ margin: 0, color: '#F1F5F9', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.65, flex: 1 }}>
                      {q}
                    </p>
                  </div>
                ))}
              </div>

              {/* Strategic Tip Note */}
              {noteLines.length > 0 && (
                <div style={{
                  marginTop: '14px',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.04))',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '10px',
                  padding: '12px 16px'
                }}>
                  <span style={{ color: '#FBBF24', fontSize: '0.78rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Flame className="w-3.5 h-3.5" />
                    <span>توجيه حواري حاسم لإثارة التفاعل:</span>
                  </span>
                  <p style={{ margin: 0, color: '#FEF9C3', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {noteLines.join(' ').replace(/^(مهم جدًا:?)/i, '').trim()}
                  </p>
                </div>
              )}
            </div>
          );
        }

        // 6. Ending Section Card
        if (sec.key === 'ending') {
          return (
            <div key={sIdx} style={{
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1.5px solid rgba(168, 85, 247, 0.28)',
              borderRadius: '14px',
              padding: '18px 20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Quote className="w-4 h-4 text-purple-400" />
                <span style={{ color: '#C084FC', fontSize: '0.82rem', fontWeight: 800 }}>
                  ✨ ختام الحلقة والرسالة الجوهرية (The Ending)
                </span>
              </div>
              <div className="space-y-2.5">
                {sec.lines.map((line, lIdx) => {
                  const isMaysa = /^(د\.\s*مايسا|مايسا):/i.test(line);
                  const isHusband = /^(الزوج|جوزها):/i.test(line);
                  const isCameraLook = /(تنظر للكاميرا|ثم تنظر|ثم:)/i.test(line);

                  if (isMaysa) {
                    return (
                      <div key={lIdx} style={{
                        background: 'rgba(236, 72, 153, 0.08)',
                        borderRight: '3px solid #EC4899',
                        borderRadius: '8px',
                        padding: '10px 14px'
                      }}>
                        <span style={{ color: '#F472B6', fontSize: '0.76rem', fontWeight: 800, display: 'block', marginBottom: '2px' }}>
                          د. مايسا:
                        </span>
                        <p style={{ margin: 0, color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 650, lineHeight: 1.75 }}>
                          {line.replace(/^(د\.\s*مايسا|مايسا):?/i, '').trim()}
                        </p>
                      </div>
                    );
                  }

                  if (isHusband) {
                    return (
                      <div key={lIdx} style={{
                        background: 'rgba(56, 189, 248, 0.08)',
                        borderRight: '3px solid #38BDF8',
                        borderRadius: '8px',
                        padding: '10px 14px'
                      }}>
                        <span style={{ color: '#38BDF8', fontSize: '0.76rem', fontWeight: 800, display: 'block', marginBottom: '2px' }}>
                          الزوج:
                        </span>
                        <p style={{ margin: 0, color: '#F0F9FF', fontSize: '0.98rem', fontWeight: 650, lineHeight: 1.75 }}>
                          {line.replace(/^(الزوج|جوزها):?/i, '').trim()}
                        </p>
                      </div>
                    );
                  }

                  if (isCameraLook) {
                    return (
                      <div key={lIdx} style={{ color: '#94A3B8', fontSize: '0.82rem', fontStyle: 'italic', padding: '2px 4px' }}>
                        {line}
                      </div>
                    );
                  }

                  return (
                    <p key={lIdx} style={{ margin: '4px 0', color: '#E2E8F0', fontSize: '0.94rem', lineHeight: 1.75 }}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        }

        // 7. Interactive Engagement CTA Card
        if (sec.key === 'interactiveCta') {
          return (
            <div key={sIdx} style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(5, 150, 105, 0.05))',
              border: '1.5px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: '0 4px 16px rgba(16, 185, 129, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span style={{ color: '#34D399', fontSize: '0.82rem', fontWeight: 800 }}>
                  📣 سؤال التفاعل والكومنتات (Engagement CTA)
                </span>
              </div>
              <div className="space-y-2">
                {sec.lines.map((line, lIdx) => {
                  const isOnScreen = /^On Screen:?/i.test(line);
                  if (isOnScreen) {
                    return (
                      <div key={lIdx} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        color: '#A7F3D0',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        marginTop: '4px'
                      }}>
                        <span>📱 على الشاشة: {line.replace(/^On Screen:?/i, '').trim()}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={lIdx} style={{ margin: 0, color: '#ECFDF5', fontSize: '1rem', fontWeight: 700, lineHeight: 1.75 }}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        }

        // 8. Commercial Booking CTA Card
        if (sec.key === 'commercialCta') {
          return (
            <div key={sIdx} style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(16, 185, 129, 0.08))',
              border: '1.5px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span style={{ color: '#FBBF24', fontSize: '0.82rem', fontWeight: 800 }}>
                  🎯 الدعوة للاستشارة وحجز الجلسات (Booking CTA)
                </span>
              </div>
              <p style={{ margin: 0, color: '#FEF9C3', fontSize: '0.96rem', fontWeight: 650, lineHeight: 1.75 }}>
                {sec.lines.join(' ')}
              </p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

/* =========================================================================
   B. REEL / VIDEO SCRIPT VIEWER (e.g. shereen_reels, omar_qa, omar_episodes)
   ========================================================================= */
function parseReelScript(text) {
  if (!text) return null;
  const sections = {};
  const keywords = [
    { key: 'hook', match: /^(hook|الـ\s*hook|الهوك|الافتتاحية)$/i },
    { key: 'intro', match: /^(intro|المقدمة|الانترو)$/i },
    { key: 'body', match: /^(body|صلب الموضوع|المحتوى)$/i },
    { key: 'conclusion', match: /^(conclusion line|conclusion|end\s*line|الخاتمة|الخلاصة|الرسالة)$/i },
    { key: 'cta', match: /^(cta|الدعوة للاتخاذ إجراء|الدعوة لاتخاذ إجراء|الدعوة)$/i },
    { key: 'editor', match: /^(for editor.*|ملاحظة للمونتير|ملاحظات للمونتير)$/i }
  ];

  let lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  let curKey = 'header';
  sections[curKey] = [];
  let foundAny = false;

  for (let line of lines) {
    const foundKw = keywords.find(k => k.match.test(line));
    if (foundKw) {
      curKey = foundKw.key;
      if (!sections[curKey]) sections[curKey] = [];
      foundAny = true;
    } else {
      sections[curKey].push(line);
    }
  }

  return foundAny ? sections : null;
}

function ReelScriptViewer({ scriptText }) {
  const parsed = parseReelScript(scriptText);
  if (!parsed) return null;

  return (
    <div className="space-y-3.5" dir="rtl" style={{ textAlign: 'right' }}>
      {/* Header Info */}
      {parsed.header && parsed.header.length > 0 && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '10px',
          marginBottom: '12px'
        }}>
          {parsed.header.map((hLine, hIdx) => (
            <span key={hIdx} style={{ fontSize: '0.86rem', color: '#94A3B8', fontWeight: 700, display: 'block' }}>
              {hLine}
            </span>
          ))}
        </div>
      )}

      {/* 1. Hook */}
      {parsed.hook && parsed.hook.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(217, 119, 6, 0.05))',
          border: '1.5px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '12px',
          padding: '14px 18px',
          boxShadow: '0 4px 16px rgba(245, 158, 11, 0.12)',
        }}>
          <span style={{ color: '#FBBF24', fontSize: '0.8rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Flame className="w-3.5 h-3.5" />
            <span>الافتتاحية والهوك (The Hook):</span>
          </span>
          <p style={{ margin: 0, color: '#FEF08A', fontSize: '1.04rem', fontWeight: 750, lineHeight: 1.75 }}>
            "{parsed.hook.join(' ')}"
          </p>
        </div>
      )}

      {/* 2. Intro */}
      {parsed.intro && parsed.intro.length > 0 && (
        <div style={{
          background: 'rgba(14, 165, 233, 0.09)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '12px',
          padding: '14px 18px',
        }}>
          <span style={{ color: '#38BDF8', fontSize: '0.78rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Mic className="w-3.5 h-3.5" />
            <span>المقدمة (Intro):</span>
          </span>
          <div style={{ color: '#F0F9FF', fontSize: '0.96rem', lineHeight: 1.85, fontWeight: 500 }}>
            {parsed.intro.map((p, i) => (
              <p key={i} style={{ margin: i > 0 ? '6px 0 0 0' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* 3. Body with Smart Bullet/Step Highlighting */}
      {parsed.body && parsed.body.length > 0 && (
        <div style={{
          background: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px 18px',
        }}>
          <span style={{ color: '#94A3B8', fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '8px' }}>
            📝 صلب الموضوع والسيناريو (Body):
          </span>
          <div className="space-y-2">
            {parsed.body.map((p, i) => {
              const isBullet = /^[•\-\*]/i.test(p);
              const isNumber = /^\d+[\.\)]/i.test(p) || /^(أولاً|ثانياً|ثالثاً|رابعاً):/i.test(p);

              if (isBullet || isNumber) {
                return (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '8px 12px'
                  }}>
                    <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.82rem', marginTop: '2px' }}>
                      {isNumber ? '✓' : '•'}
                    </span>
                    <span style={{ color: '#E2E8F0', fontSize: '0.94rem', lineHeight: 1.7 }}>
                      {p.replace(/^[•\-\*]\s*/, '')}
                    </span>
                  </div>
                );
              }

              return (
                <p key={i} style={{ margin: '6px 0', color: '#CBD5E1', fontSize: '0.96rem', lineHeight: 1.85 }}>
                  {p}
                </p>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Conclusion / End Line */}
      {parsed.conclusion && parsed.conclusion.length > 0 && (
        <div style={{
          background: 'rgba(168, 85, 247, 0.09)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          borderRadius: '12px',
          padding: '14px 18px',
        }}>
          <span style={{ color: '#C084FC', fontSize: '0.78rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <Lightbulb className="w-3.5 h-3.5" />
            <span>الرسالة الجوهرية (End Line / Conclusion):</span>
          </span>
          <p style={{ margin: 0, color: '#F5F3FF', fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.75 }}>
            "{parsed.conclusion.join(' ')}"
          </p>
        </div>
      )}

      {/* 5. CTA */}
      {parsed.cta && parsed.cta.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(5, 150, 105, 0.05))',
          border: '1.5px solid rgba(16, 185, 129, 0.32)',
          borderRadius: '12px',
          padding: '14px 18px',
          boxShadow: '0 4px 16px rgba(16, 185, 129, 0.12)',
        }}>
          <span style={{ color: '#34D399', fontSize: '0.78rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>الدعوة لإجراء (Call to Action / CTA):</span>
          </span>
          <p style={{ margin: 0, color: '#ECFDF5', fontSize: '0.96rem', fontWeight: 650, lineHeight: 1.75 }}>
            {parsed.cta.join(' ')}
          </p>
        </div>
      )}

      {/* 6. Editor Notes */}
      {parsed.editor && parsed.editor.length > 0 && (
        <div style={{
          background: 'rgba(245, 158, 11, 0.05)',
          border: '1px dashed rgba(245, 158, 11, 0.3)',
          borderRadius: '10px',
          padding: '14px 16px',
        }}>
          <span style={{ color: '#F59E0B', fontSize: '0.76rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <Scissors className="w-3.5 h-3.5" />
            <span>توجيهات المونتاج والإخراج (Editor Notes):</span>
          </span>
          <div style={{ color: '#FDE68A', fontSize: '0.88rem', lineHeight: 1.7 }}>
            {parsed.editor.map((p, i) => (
              <p key={i} style={{ margin: i > 0 ? '4px 0 0 0' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   C. MULTI-LINE POST IDEAS / CAPTIONS VIEWER (e.g. rehab_posts, maysa_month9)
   ========================================================================= */
function PostIdeasViewer({ scriptText }) {
  const lines = scriptText.split('\n').map(l => l.trim()).filter(Boolean);

  return (
    <div className="space-y-3" dir="rtl" style={{ textAlign: 'right' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        marginBottom: '6px'
      }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>بنك أفكار المحتوى والصيغ المعتمدة ({lines.length} صيغة وفكرة)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {lines.map((line, idx) => {
          const numStr = String(idx + 1).padStart(2, '0');
          const hasQuote = /^["«]/i.test(line) || line.includes('"');
          const hasDash = line.includes('—') || line.includes(' - ');
          const isQuestion = /(\?|؟)$/.test(line);

          let mainText = line;
          let subText = null;

          if (hasDash) {
            const parts = line.split(/[—\-]/);
            if (parts.length >= 2) {
              mainText = parts[0].trim();
              subText = parts.slice(1).join('—').trim();
            }
          }

          return (
            <div
              key={idx}
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              className="hover:border-sky-500/40 hover:bg-slate-900/90"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{
                  background: isQuestion ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                  color: isQuestion ? '#38BDF8' : '#CBD5E1',
                  fontWeight: 800,
                  fontSize: '0.74rem',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  shrink: 0,
                  marginTop: '2px'
                }}>
                  {numStr}
                </span>

                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: 0,
                    color: hasQuote ? '#FEF08A' : '#F8FAFC',
                    fontSize: '0.94rem',
                    fontWeight: 650,
                    lineHeight: 1.6
                  }}>
                    {mainText}
                  </p>

                  {subText && (
                    <p style={{
                      margin: '4px 0 0 0',
                      color: '#94A3B8',
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                    }}>
                      {subText}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   D. GENERAL SMART CARD VIEWER (Fallback - No plain raw text walls ever!)
   ========================================================================= */
function GeneralSmartViewer({ scriptText }) {
  const paragraphs = scriptText.split('\n\n').map(p => p.trim()).filter(Boolean);

  if (paragraphs.length <= 1) {
    const lines = scriptText.split('\n').map(l => l.trim()).filter(Boolean);
    return (
      <div style={{
        background: 'rgba(15, 23, 42, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '16px 18px',
      }} dir="rtl">
        {lines.map((l, i) => (
          <p key={i} style={{ margin: i > 0 ? '8px 0 0 0' : 0, color: '#E2E8F0', fontSize: '0.96rem', lineHeight: 1.85 }}>
            {l}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3" dir="rtl" style={{ textAlign: 'right' }}>
      {paragraphs.map((para, idx) => (
        <div
          key={idx}
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '14px 18px',
          }}
        >
          <p style={{ margin: 0, color: '#E2E8F0', fontSize: '0.96rem', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
            {para}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =========================================================================
   MAIN SCRIPT BLOCK VIEWER (Dispatches to the ideal viewer)
   ========================================================================= */
function ScriptBlockViewer({ scriptText }) {
  if (!scriptText) return null;

  const type = detectScriptType(scriptText);

  if (type === 'podcast') {
    return <PodcastEpisodeViewer scriptText={scriptText} />;
  }

  if (type === 'reel') {
    return <ReelScriptViewer scriptText={scriptText} />;
  }

  if (type === 'post_ideas') {
    return <PostIdeasViewer scriptText={scriptText} />;
  }

  return <GeneralSmartViewer scriptText={scriptText} />;
}

export default function WorkModal({ isOpen, onClose, deliverable, client, category }) {
  const [openAccordionIdx, setOpenAccordionIdx] = useState(0);
  const [selectedSheetIdx, setSelectedSheetIdx] = useState(0);

  useEffect(() => {
    setOpenAccordionIdx(0);
    setSelectedSheetIdx(0);
  }, [deliverable, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !deliverable) return null;

  const dbData = SCRIPT_DATABASE[deliverable.id] || null;
  const isPdfDeck = deliverable.type === 'pdf_deck' || deliverable.type === 'pdf';
  const hasPdfImages = isPdfDeck && dbData && dbData.images && dbData.images.length > 0;

  const sheetLinksArr = deliverable.sheetLinks?.length
    ? deliverable.sheetLinks
    : deliverable.sheetUrl
    ? [{ label: 'Open in Google Sheets', url: deliverable.sheetUrl }]
    : dbData?.sheetUrl
    ? [{ label: 'Open in Google Sheets', url: dbData.sheetUrl }]
    : [];

  const isSheetDeliverable =
    deliverable.type === 'sheet_plan' ||
    deliverable.type === 'xlsx' ||
    sheetLinksArr.length > 0 ||
    Boolean(dbData && (dbData.type === 'sheet_plan' || dbData.type === 'xlsx' || dbData.sheetUrl));

  const allTables = dbData?.tables?.length
    ? dbData.tables
    : (dbData?.headers && dbData?.rows)
    ? [{ title: deliverable.title, headers: dbData.headers, rows: dbData.rows }]
    : [];

  const accentColor = category?.accentColor || client?.color || '#38BDF8';

  const toggleAccordion = (idx) => {
    setOpenAccordionIdx((prev) => (prev === idx ? null : idx));
  };

  const activeSheetObj = sheetLinksArr[selectedSheetIdx] || sheetLinksArr[0] || null;
  const activeSheetUrl = activeSheetObj?.url || deliverable.sheetUrl || dbData?.sheetUrl || '';

  return (
    <AnimatePresence>
      <div className="work-modal open" id="workModal" role="dialog" aria-modal="true">
        <motion.div
          className="work-modal__backdrop"
          id="workModalBackdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <button
          className="work-modal__close"
          id="workModalClose"
          aria-label="Close modal"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <motion.div
          className="work-modal__container"
          data-lenis-prevent="true"
          style={{
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            background: 'var(--surface-card, #0a1120)',
            borderColor: 'var(--border, rgba(255, 255, 255, 0.12))',
          }}
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        >
          <div className="work-modal__content" data-lenis-prevent="true">
            {/* 1. PDF PRESENTATION SLIDES */}
            {hasPdfImages ? (
              <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '20px 16px 36px 16px', boxSizing: 'border-box' }}>
                <div
                  style={{
                    marginBottom: '18px',
                    padding: '14px 18px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div dir="rtl" className="text-right">
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: accentColor,
                        background: `${accentColor}18`,
                        border: `1px solid ${accentColor}35`,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        display: 'inline-block',
                        marginBottom: '6px',
                      }}
                    >
                      {client ? client.name : dbData.client || ''}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#F8FAFC', margin: 0, lineHeight: 1.4 }}>
                      {dbData.title || deliverable.title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-sky-400" />
                    <span>{dbData.images.length} Slides</span>
                  </span>
                </div>

                {dbData.images.map((imgSrc, sIdx) => {
                  const resolvedSrc = imgSrc.startsWith('http') || imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;
                  return (
                    <div
                      key={sIdx}
                      style={{
                        marginBottom: '18px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: '#040914',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                        position: 'relative',
                        aspectRatio: '16/9',
                        width: '100%',
                      }}
                    >
                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-md border border-white/10 z-10">
                        {sIdx + 1} / {dbData.images.length}
                      </div>
                      <img
                        src={resolvedSrc}
                        alt={`Slide ${sIdx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  );
                })}
              </div>
            ) : isSheetDeliverable ? (
              /* 2. DIRECT SHEET VIEW: ONLY A DIRECT BUTTON TO THE GOOGLE SHEET, NOTHING ELSE! */
              <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 48px 20px', textAlign: 'center' }}>
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(6, 78, 59, 0.25))',
                    border: '1.5px solid rgba(16, 185, 129, 0.35)',
                    borderRadius: '20px',
                    padding: '38px 28px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                    }}
                  >
                    <Table className="w-8 h-8" />
                  </div>

                  {/* Badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${accentColor}18`, border: `1px solid ${accentColor}30`, padding: '4px 14px', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: accentColor }}>
                      {client?.name || dbData?.client || 'Client Work'}
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                      {deliverable.badge || 'Google Sheets'}
                    </span>
                  </div>

                  {/* Deliverable Title */}
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', margin: '0', lineHeight: 1.4 }} dir="rtl">
                    {deliverable.title}
                  </h3>

                  {/* Direct Sheet Buttons - Only the button to go to the sheet! */}
                  <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                    {sheetLinksArr.map((sl, sIdx) => (
                      <a
                        key={sIdx}
                        href={sl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-102 active:scale-98 transition-all flex items-center justify-between gap-3 cursor-pointer shadow-lg shadow-emerald-950/40"
                        style={{
                          background: '#059669',
                          color: '#FFFFFF',
                          fontSize: '1rem',
                          fontWeight: 800,
                          padding: '14px 24px',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          width: '100%',
                          boxSizing: 'border-box',
                        }}
                      >
                        <Table className="w-5 h-5 text-emerald-100 shrink-0" />
                        <span className="truncate" style={{ flex: 1, textAlign: 'center' }}>
                          {sl.label && sl.label !== 'Open in Google Sheets' ? sl.label : 'فتح في Google Sheets ↗'}
                        </span>
                        <ExternalLink className="w-4 h-4 text-emerald-200 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* 3. REGULAR CONTENT: SCRIPTS, PLANS, TABLES & SCHEDULES */
              <div className="work-modal__info" style={{ maxWidth: '1080px', margin: '0 auto', padding: '24px 18px 42px 18px' }}>
                {/* Header metadata bar */}
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div dir="rtl" className="text-right">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: accentColor,
                          background: `${accentColor}18`,
                          border: `1px solid ${accentColor}30`,
                          padding: '2px 8px',
                          borderRadius: '6px',
                        }}
                      >
                        {client?.name || 'Client Work'}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                        {deliverable.badge || deliverable.title}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.28rem', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>
                      {deliverable.title}
                    </h3>
                  </div>

                  {/* Clean Direct Sheet Open Action - ONLY A DIRECT BUTTON, NO IFRAME! */}
                  {activeSheetUrl && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {sheetLinksArr.length > 1 && (
                        <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.05)', padding: '3px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {sheetLinksArr.map((sl, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => setSelectedSheetIdx(sIdx)}
                              style={{
                                padding: '5px 12px',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                border: 'none',
                                background: selectedSheetIdx === sIdx ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                                color: selectedSheetIdx === sIdx ? '#38BDF8' : '#94A3B8',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {sl.label || `Sheet 0${sIdx + 1}`}
                            </button>
                          ))}
                        </div>
                      )}

                      <a
                        href={activeSheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                        style={{
                          background: '#059669',
                          color: '#FFFFFF',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          padding: '10px 20px',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 16px rgba(5, 150, 105, 0.35)',
                        }}
                      >
                        <Table className="w-4 h-4" />
                        <span>Open in Google Sheets</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="work-modal__desc" id="workModalDesc">
                  {/* A. BRANCH INFO (IF PRESENT) */}
                  {dbData?.branchInfo && (
                    <div
                      dir="rtl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        marginBottom: '16px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        alignItems: 'center',
                        fontSize: '0.85rem',
                        color: '#94A3B8',
                        textAlign: 'right',
                      }}
                    >
                      {dbData.branchInfo.location && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MapPin className="w-3.5 h-3.5 text-sky-400" />
                          <span style={{ color: '#E2E8F0' }}>{dbData.branchInfo.location}</span>
                        </div>
                      )}
                      {dbData.branchInfo.specialty && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span style={{ color: '#FDE68A' }}>{dbData.branchInfo.specialty}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* B. CAMPAIGN LINE & OBJECTIVE (IF PRESENT) */}
                  {dbData?.campaignLine && (
                    <div
                      dir="rtl"
                      style={{
                        background: 'rgba(56, 189, 248, 0.08)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        marginBottom: '16px',
                        textAlign: 'right',
                      }}
                    >
                      <span style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.78rem', display: 'block', marginBottom: '2px' }}>
                        شعار الحملة (Campaign Line):
                      </span>
                      <div style={{ color: '#FFFFFF', fontSize: '1.02rem', fontWeight: 800 }}>
                        {dbData.campaignLine}
                      </div>
                    </div>
                  )}

                  {dbData?.goal && !dbData?.days && (
                    <div
                      dir="rtl"
                      style={{
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.22)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        marginBottom: '16px',
                        textAlign: 'right',
                      }}
                    >
                      <span style={{ color: '#34D399', fontWeight: 700, fontSize: '0.78rem', display: 'block', marginBottom: '2px' }}>
                        الهدف التسويقي (Objective):
                      </span>
                      <div style={{ color: '#ECFDF5', fontSize: '0.94rem', lineHeight: 1.7 }}>
                        {dbData.goal}
                      </div>
                    </div>
                  )}

                  {/* C. HOOK / STRATEGIC SUMMARY (IF PRESENT) */}
                  {dbData?.hook && (
                    <div
                      dir="rtl"
                      style={{
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px solid rgba(245, 158, 11, 0.22)',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        marginBottom: '18px',
                        textAlign: 'right',
                      }}
                    >
                      <span style={{ color: '#FBBF24', fontWeight: 700, fontSize: '0.82rem', display: 'block', marginBottom: '4px' }}>
                        استراتيجية وهدف المحتوى (Strategic Focus):
                      </span>
                      <div style={{ color: '#FEF9C3', fontSize: '0.96rem', lineHeight: 1.8, fontWeight: 500 }}>
                        {dbData.hook}
                      </div>
                    </div>
                  )}

                  {/* D. DEDICATED GOOGLE SHEET CALLOUT (NO IFRAMES - CLEAN DIRECT ACCESS) */}
                  {isSheetDeliverable && (
                    <div
                      style={{
                        background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.14), rgba(16, 185, 129, 0.05))',
                        border: '1.5px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '14px',
                        padding: '16px 20px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '14px',
                      }}
                    >
                      <div dir="rtl" style={{ textAlign: 'right', maxWidth: '650px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ color: '#34D399', fontWeight: 800, fontSize: '0.88rem' }}>
                            جدول ومخطط محتوى مباشر (Live Google Sheet)
                          </span>
                        </div>
                        <p style={{ margin: 0, color: '#A7F3D0', fontSize: '0.88rem', lineHeight: 1.6 }}>
                          المحتوى والجدول الزمني متاح مباشرة على Google Sheets لسهولة الفلترة والاطلاع الفوري.
                        </p>
                      </div>

                      {activeSheetUrl && (
                        <a
                          href={activeSheetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: '#059669',
                            color: '#FFFFFF',
                            fontSize: '0.88rem',
                            fontWeight: 800,
                            padding: '10px 20px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 16px rgba(5, 150, 105, 0.35)',
                            transition: 'all 0.2s ease',
                          }}
                          className="hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <Table className="w-4 h-4" />
                          <span>Open in Google Sheets ↗</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* E. STRUCTURED TABLES / SCHEDULES (SUPPORTING ALL TABLES, BADR_SHEET2, KHALAT_AUGUST, ETC.) */}
                  {allTables.length > 0 && (
                    <div style={{ marginBottom: '22px' }}>
                      {allTables.map((tbl, tIdx) => (
                        <div
                          key={tIdx}
                          style={{
                            background: 'rgba(15, 23, 42, 0.65)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '14px',
                            padding: '16px 18px',
                            marginBottom: '16px',
                          }}
                        >
                          {tbl.title && (
                            <h4 style={{ color: '#7DD3FC', fontSize: '1rem', fontWeight: 800, margin: '0 0 12px 0', textAlign: 'right' }} dir="rtl">
                              {tbl.title}
                            </h4>
                          )}

                          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', direction: 'rtl', fontSize: '0.88rem' }}>
                              <thead>
                                <tr style={{ background: 'rgba(14, 165, 233, 0.12)', borderBottom: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                  {tbl.headers?.map((h, hIdx) => (
                                    <th key={hIdx} style={{ padding: '12px 14px', color: '#BAE6FD', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {tbl.rows?.map((row, rIdx) => (
                                  <tr
                                    key={rIdx}
                                    style={{
                                      background: rIdx % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.035)',
                                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    }}
                                  >
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} style={{ padding: '12px 14px', color: cIdx === 1 ? '#FFFFFF' : '#CBD5E1', fontWeight: cIdx === 1 ? 600 : 400, lineHeight: 1.6 }}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* F. SINGLE SCRIPT WITH SCENES (BALANCED SCREENPLAY SPLIT FORMAT) */}
                  {dbData?.scenes && (
                    <div style={{ marginTop: '4px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                        {dbData.duration && (
                          <span className="bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-sky-400" />
                            <span>Duration: {dbData.duration}</span>
                          </span>
                        )}
                        {dbData.audio && (
                          <span className="bg-amber-500/10 text-amber-200 border border-amber-500/20 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                            <span dir="rtl">{dbData.audio}</span>
                          </span>
                        )}
                      </div>

                      {dbData.concept && (
                        <div
                          dir="rtl"
                          style={{
                            background: 'rgba(15, 23, 42, 0.7)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            padding: '14px 18px',
                            marginBottom: '16px',
                            color: '#CBD5E1',
                            fontSize: '0.92rem',
                            lineHeight: 1.75,
                            textAlign: 'right',
                          }}
                        >
                          <strong style={{ color: '#38BDF8', display: 'block', marginBottom: '4px', fontSize: '0.85rem' }}>
                            الفكرة العامة (Core Concept):
                          </strong>
                          {dbData.concept}
                        </div>
                      )}

                      {/* Screenplay Accordion Layout for Scenes: Click to Expand / Collapse */}
                      <div className="deliverable-accordion space-y-3" style={{ '--item-accent': accentColor }}>
                        {dbData.scenes.map((s, sIdx) => {
                          const isOpenItem = openAccordionIdx === sIdx;
                          const numStr = String(sIdx + 1).padStart(2, '0');
                          const sceneTitle = s.num || `المشهد ${numStr}`;
                          const previewText = s.dialogue ? s.dialogue.slice(0, 65) + '...' : s.visual ? s.visual.slice(0, 65) + '...' : '';

                          return (
                            <article
                              key={sIdx}
                              className={`accordion-item ${isOpenItem ? 'is-active' : ''}`}
                              style={{
                                background: 'rgba(15, 23, 42, 0.75)',
                                borderColor: isOpenItem ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                transition: 'border-color 0.25s ease',
                              }}
                            >
                              <button
                                type="button"
                                className="accordion-item__trigger"
                                aria-expanded={isOpenItem}
                                onClick={() => toggleAccordion(sIdx)}
                                style={{
                                  padding: '14px 18px',
                                  width: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  background: isOpenItem ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                                  border: 'none',
                                  cursor: 'pointer',
                                  transition: 'background 0.2s ease',
                                }}
                              >
                                <div className="accordion-item__start" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <span
                                    className="accordion-item__num-badge"
                                    style={{
                                      background: isOpenItem ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                                      color: isOpenItem ? '#38BDF8' : '#CBD5E1',
                                      fontWeight: 800,
                                      padding: '4px 8px',
                                      borderRadius: '8px',
                                      fontSize: '0.8rem',
                                    }}
                                  >
                                    {numStr}
                                  </span>
                                  <div className="accordion-item__meta" dir="rtl" style={{ textAlign: 'right' }}>
                                    <h4
                                      className="accordion-item__title"
                                      style={{
                                        fontSize: '0.96rem',
                                        fontWeight: 700,
                                        color: isOpenItem ? '#38BDF8' : '#F8FAFC',
                                        margin: 0,
                                        transition: 'color 0.2s ease',
                                      }}
                                    >
                                      {sceneTitle}
                                    </h4>
                                    {!isOpenItem && previewText && (
                                      <span
                                        className="accordion-item__preview"
                                        style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'block', marginTop: '3px' }}
                                      >
                                        {previewText}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="accordion-item__end" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span
                                    className="accordion-item__status-pill"
                                    style={{
                                      background: 'rgba(255, 255, 255, 0.05)',
                                      color: '#94A3B8',
                                      borderColor: 'rgba(255, 255, 255, 0.08)',
                                      fontSize: '0.74rem',
                                      padding: '3px 8px',
                                      borderRadius: '6px',
                                    }}
                                  >
                                    Scene {numStr}
                                  </span>
                                  <span className="accordion-item__chevron">
                                    <ChevronDown
                                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                                        isOpenItem ? 'rotate-180 text-sky-400' : ''
                                      }`}
                                    />
                                  </span>
                                </div>
                              </button>

                              {isOpenItem && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="accordion-item__content"
                                  style={{
                                    display: 'block',
                                    padding: '0',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                                  }}
                                  dir="rtl"
                                >
                                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/5" dir="rtl">
                                    {/* Right Side: Dialogue / Performance */}
                                    <div style={{ padding: '18px 20px', textAlign: 'right' }}>
                                      <span style={{ color: '#7DD3FC', fontSize: '0.76rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                                        🎙️ الحوار والأداء الصوتي (Dialogue / VO):
                                      </span>
                                      <p style={{ margin: 0, color: '#FFFFFF', fontSize: '1rem', fontWeight: 500, lineHeight: 1.9 }}>
                                        {s.dialogue || '—'}
                                      </p>
                                    </div>

                                    {/* Left Side: Camera & Visual Direction + SFX + Text on Screen */}
                                    <div style={{ padding: '18px 20px', textAlign: 'right', background: 'rgba(0, 0, 0, 0.18)' }}>
                                      {s.visual && (
                                        <div style={{ marginBottom: s.sfx || s.textOnScreen ? '12px' : '0' }}>
                                          <span style={{ color: '#38BDF8', fontSize: '0.76rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                                            🎬 اللقطة والتوجيه البصري (Video):
                                          </span>
                                          <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.75 }}>
                                            {s.visual}
                                          </p>
                                        </div>
                                      )}

                                      {s.textOnScreen && (
                                        <div style={{ marginTop: '10px', background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.22)', borderRadius: '8px', padding: '8px 12px' }}>
                                          <span style={{ color: '#C084FC', fontSize: '0.74rem', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                                            النص على الشاشة (On-Screen Text):
                                          </span>
                                          <p style={{ margin: 0, color: '#F3E8FF', fontSize: '0.88rem', fontWeight: 600 }}>
                                            {s.textOnScreen}
                                          </p>
                                        </div>
                                      )}

                                      {s.sfx && (
                                        <div style={{ marginTop: '10px', background: 'rgba(245, 158, 11, 0.07)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px', padding: '8px 12px' }}>
                                          <span style={{ color: '#F59E0B', fontSize: '0.74rem', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                                            🔊 المؤثرات الصوتية (SFX):
                                          </span>
                                          <p style={{ margin: 0, color: '#FDE68A', fontSize: '0.86rem', lineHeight: 1.6 }}>
                                            {s.sfx}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </article>
                          );
                        })}
                      </div>

                      {dbData.cta && (
                        <div
                          dir="rtl"
                          style={{
                            marginTop: '16px',
                            background: 'rgba(16, 185, 129, 0.08)',
                            border: '1px solid rgba(16, 185, 129, 0.22)',
                            borderRadius: '12px',
                            padding: '14px 18px',
                            textAlign: 'right',
                          }}
                        >
                          <span style={{ color: '#34D399', fontWeight: 700, fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>
                            دعوة لاتخاذ إجراء (CTA):
                          </span>
                          <div style={{ color: '#ECFDF5', fontSize: '0.94rem', lineHeight: 1.75 }}>
                            {dbData.cta}
                          </div>
                        </div>
                      )}

                      {dbData.notes && (
                        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '12px 16px', marginTop: '14px', textAlign: 'right' }} dir="rtl">
                          <span style={{ color: '#94A3B8', fontWeight: 700, fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>
                            ملاحظات الإنتاج (Production Notes):
                          </span>
                          <span style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.6 }}>{dbData.notes}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* G. TRENDS LIBRARY (BADR_TRENDS, POLD_TRENDS) */}
                  {dbData?.trends && dbData.trends.length > 0 && (
                    <div style={{ marginBottom: '22px' }}>
                      <h4 style={{ color: '#38BDF8', fontSize: '1rem', fontWeight: 800, margin: '0 0 14px 0', textAlign: 'right' }} dir="rtl">
                        مكتبة الأفكار والمراجع المعتمدة (Trends & References):
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {dbData.trends.map((tr, trIdx) => (
                          <div
                            key={trIdx}
                            style={{
                              background: 'rgba(15, 23, 42, 0.7)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              borderRadius: '12px',
                              padding: '14px 16px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              gap: '10px',
                            }}
                          >
                            <div dir="rtl" style={{ textAlign: 'right' }}>
                              {tr.num && (
                                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#F59E0B', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: '6px' }}>
                                  Ref {tr.num}
                                </span>
                              )}
                              <h5 style={{ margin: 0, color: '#F8FAFC', fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.6 }}>
                                {tr.title}
                              </h5>
                            </div>
                            {tr.link && (
                              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <a
                                  href={tr.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    color: '#E1306C',
                                    background: 'rgba(225, 48, 108, 0.12)',
                                    border: '1px solid rgba(225, 48, 108, 0.3)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                  }}
                                  className="hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                  <i className="fa-brands fa-instagram"></i>
                                  <span>Open Instagram Reel ↗</span>
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* H. PODCAST & VIDEO EPISODES (OMAR_EPISODES, MAYSA_PODCAST) */}
                  {dbData?.episodes && dbData.episodes.length > 0 && (
                    <div style={{ marginBottom: '22px' }}>
                      <h4 style={{ color: '#EC4899', fontSize: '1rem', fontWeight: 800, margin: '0 0 14px 0', textAlign: 'right' }} dir="rtl">
                        حلقات البودكاست وسلسلة الفيديوهات (Podcast & Video Series):
                      </h4>
                      <div className="deliverable-accordion" style={{ '--item-accent': '#EC4899' }}>
                        {dbData.episodes.map((ep, epIdx) => {
                          const isOpenItem = openAccordionIdx === epIdx;
                          const numStr = String(epIdx + 1).padStart(2, '0');
                          return (
                            <article
                              key={epIdx}
                              className={`accordion-item ${isOpenItem ? 'is-active' : ''}`}
                              style={{ background: 'rgba(15, 23, 42, 0.65)', borderColor: 'rgba(255,255,255,0.08)', marginBottom: '10px', borderRadius: '12px' }}
                            >
                              <button
                                type="button"
                                className="accordion-item__trigger"
                                aria-expanded={isOpenItem}
                                onClick={() => toggleAccordion(epIdx)}
                                style={{ padding: '14px 18px' }}
                              >
                                <div className="accordion-item__start">
                                  <span className="accordion-item__num-badge" style={{ background: 'rgba(236, 72, 153, 0.18)', color: '#F472B6' }}>
                                    {numStr}
                                  </span>
                                  <div className="accordion-item__meta" dir="rtl" style={{ textAlign: 'right' }}>
                                    <h4 className="accordion-item__title" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#F8FAFC' }}>
                                      {ep.title}
                                    </h4>
                                    {ep.hook && (
                                      <span className="accordion-item__preview" style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                                        {ep.hook}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="accordion-item__end">
                                  <span className="accordion-item__status-pill" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#F472B6', borderColor: 'rgba(236, 72, 153, 0.25)' }}>
                                    Podcast Episode
                                  </span>
                                  <span className="accordion-item__chevron">
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpenItem ? 'rotate-180' : ''}`} />
                                  </span>
                                </div>
                              </button>

                              {isOpenItem && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="accordion-item__content"
                                  style={{ display: 'block', padding: '18px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                                  dir="rtl"
                                >
                                  {ep.hook && (
                                    <div style={{ background: 'rgba(236, 72, 153, 0.08)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '10px', padding: '10px 14px', marginBottom: '14px', textAlign: 'right' }}>
                                      <span style={{ color: '#F472B6', fontWeight: 700, fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>
                                        الهوك والافتتاحية:
                                      </span>
                                      <span style={{ color: '#FDF2F8', fontSize: '0.94rem', lineHeight: 1.7 }}>
                                        {ep.hook}
                                      </span>
                                    </div>
                                  )}
                                  {ep.script && (
                                    <ScriptBlockViewer scriptText={ep.script} />
                                  )}
                                </motion.div>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* I. CREATIVE CONCEPTS (KHALAT_PDF_TEST) */}
                  {dbData?.concepts && dbData.concepts.length > 0 && (
                    <div style={{ marginBottom: '22px' }}>
                      <h4 style={{ color: '#38BDF8', fontSize: '1rem', fontWeight: 800, margin: '0 0 14px 0', textAlign: 'right' }} dir="rtl">
                        الأفكار الإبداعية التجريبية (Creative Concepts):
                      </h4>
                      <div className="space-y-4">
                        {dbData.concepts.map((c, cIdx) => (
                          <div key={cIdx} style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                                {c.badge || c.num}
                              </span>
                              {c.duration && (
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                                  <span>{c.duration}</span>
                                </span>
                              )}
                            </div>
                            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, margin: '0 0 8px 0', textAlign: 'right' }} dir="rtl">
                              {c.title}
                            </h4>
                            {c.style && (
                              <p style={{ color: '#94A3B8', fontSize: '0.88rem', margin: '0 0 14px 0', textAlign: 'right' }} dir="rtl">
                                {c.style}
                              </p>
                            )}
                            {c.scenes && (
                              <div className="space-y-3 mt-3">
                                {c.scenes.map((cs, csIdx) => (
                                  <div key={csIdx} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px 14px', textAlign: 'right' }} dir="rtl">
                                    <span style={{ color: '#7DD3FC', fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>{cs.num}</span>
                                    {cs.visual && <p style={{ margin: '3px 0', color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.6 }}><strong style={{ color: '#94A3B8' }}>البصريات:</strong> {cs.visual}</p>}
                                    {cs.dialogue && <p style={{ margin: '3px 0', color: '#FFFFFF', fontSize: '0.92rem', lineHeight: 1.7 }}><strong style={{ color: '#7DD3FC' }}>الحوار:</strong> {cs.dialogue}</p>}
                                    {cs.sfx && <p style={{ margin: '3px 0', color: '#FDE68A', fontSize: '0.84rem' }}><strong style={{ color: '#F59E0B' }}>SFX:</strong> {cs.sfx}</p>}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* J. REELS SERIES */}
                  {dbData?.reels && (
                    <div style={{ marginTop: '4px' }}>
                      <div className="deliverable-accordion" style={{ '--item-accent': accentColor }}>
                        {dbData.reels.map((reel, rIdx) => {
                          const isOpenItem = openAccordionIdx === rIdx;
                          const numStr = String(rIdx + 1).padStart(2, '0');
                          const scriptText = reel.answer || reel.script || '';
                          return (
                            <article key={rIdx} className={`accordion-item ${isOpenItem ? 'is-active' : ''}`} style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(255,255,255,0.08)', marginBottom: '10px', borderRadius: '12px' }}>
                              <button
                                type="button"
                                className="accordion-item__trigger"
                                aria-expanded={isOpenItem}
                                onClick={() => toggleAccordion(rIdx)}
                                style={{ padding: '14px 18px' }}
                              >
                                <div className="accordion-item__start">
                                  <span className="accordion-item__num-badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#CBD5E1' }}>{numStr}</span>
                                  <div className="accordion-item__meta" dir="rtl" style={{ textAlign: 'right' }}>
                                    <h4 className="accordion-item__title" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#F8FAFC' }}>{reel.title}</h4>
                                    {reel.hook && (
                                      <span className="accordion-item__preview" style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                                        {reel.hook}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="accordion-item__end">
                                  <span className="accordion-item__status-pill" style={{ background: 'rgba(255,255,255,0.05)', color: '#94A3B8', borderColor: 'rgba(255,255,255,0.08)' }}>
                                    Reel Script
                                  </span>
                                  <span className="accordion-item__chevron">
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpenItem ? 'rotate-180' : ''}`} />
                                  </span>
                                </div>
                              </button>

                              {isOpenItem && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="accordion-item__content"
                                  style={{ display: 'block', padding: '18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                                  dir="rtl"
                                >
                                  <ScriptBlockViewer scriptText={scriptText} />
                                </motion.div>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* K. POSTS SERIES */}
                  {dbData?.posts && (
                    <div style={{ marginTop: '4px' }}>
                      <div className="deliverable-accordion" style={{ '--item-accent': accentColor }}>
                        {dbData.posts.map((post, pIdx) => {
                          const isOpenItem = openAccordionIdx === pIdx;
                          const numStr = String(pIdx + 1).padStart(2, '0');
                          const displayTitle = post.title || post.topic || `Post ${numStr}`;
                          const badgeLabel = post.topic
                            ? post.topic.length > 25
                              ? post.topic.slice(0, 24) + '...'
                              : post.topic
                            : deliverable.badge || 'Post';

                          return (
                            <article key={pIdx} className={`accordion-item ${isOpenItem ? 'is-active' : ''}`} style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(255,255,255,0.08)', marginBottom: '10px', borderRadius: '12px' }}>
                              <button
                                type="button"
                                className="accordion-item__trigger"
                                aria-expanded={isOpenItem}
                                onClick={() => toggleAccordion(pIdx)}
                                style={{ padding: '14px 18px' }}
                              >
                                <div className="accordion-item__start">
                                  <span className="accordion-item__num-badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#CBD5E1' }}>{numStr}</span>
                                  <div className="accordion-item__meta" dir="rtl" style={{ textAlign: 'right' }}>
                                    <h4 className="accordion-item__title" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#F8FAFC' }}>{displayTitle}</h4>
                                    {post.caption && (
                                      <span className="accordion-item__preview" style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                                        {post.caption.split('\n')[0].slice(0, 70)}...
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="accordion-item__end">
                                  <span className="accordion-item__status-pill" style={{ background: 'rgba(255,255,255,0.05)', color: '#94A3B8', borderColor: 'rgba(255,255,255,0.08)' }}>
                                    {badgeLabel}
                                  </span>
                                  <span className="accordion-item__chevron">
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpenItem ? 'rotate-180' : ''}`} />
                                  </span>
                                </div>
                              </button>

                              {isOpenItem && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="accordion-item__content"
                                  style={{ display: 'block', padding: '18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                                  dir="rtl"
                                >
                                  {post.direction && (
                                    <div
                                      style={{
                                        background: 'rgba(56,189,248,0.06)',
                                        border: '1px dashed rgba(56,189,248,0.25)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        marginBottom: '12px',
                                        color: '#BAE6FD',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        textAlign: 'right',
                                      }}
                                    >
                                      الهدف والتوجيه: {post.direction}
                                    </div>
                                  )}
                                  <ScriptBlockViewer scriptText={post.caption} />
                                </motion.div>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* L. LAUNCH PLAN (DAYS) */}
                  {dbData?.days && (
                    <div style={{ marginTop: '4px' }}>
                      {dbData.strategy && (
                        <div
                          dir="rtl"
                          style={{
                            background: 'rgba(15, 23, 42, 0.7)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            padding: '16px 18px',
                            marginBottom: '16px',
                            color: '#E2E8F0',
                            fontSize: '0.94rem',
                            lineHeight: 1.8,
                            textAlign: 'right',
                          }}
                        >
                          <strong style={{ color: '#F59E0B', display: 'block', marginBottom: '4px', fontSize: '0.85rem' }}>
                            Launch Strategy:
                          </strong>
                          {dbData.strategy}
                        </div>
                      )}

                      <div className="deliverable-accordion" style={{ '--item-accent': accentColor }}>
                        {dbData.days.map((day, dIdx) => {
                          const isOpenItem = openAccordionIdx === dIdx;
                          const numStr = String(dIdx + 1).padStart(2, '0');
                          return (
                            <article key={dIdx} className={`accordion-item ${isOpenItem ? 'is-active' : ''}`} style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(255,255,255,0.08)', marginBottom: '10px', borderRadius: '12px' }}>
                              <button
                                type="button"
                                className="accordion-item__trigger"
                                aria-expanded={isOpenItem}
                                onClick={() => toggleAccordion(dIdx)}
                                style={{ padding: '14px 18px' }}
                              >
                                <div className="accordion-item__start">
                                  <span className="accordion-item__num-badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#CBD5E1' }}>{numStr}</span>
                                  <div className="accordion-item__meta" dir="rtl" style={{ textAlign: 'right' }}>
                                    <h4 className="accordion-item__title" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#F8FAFC' }}>{day.dayName}</h4>
                                    {day.goal && (
                                      <span className="accordion-item__preview" style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                                        {day.goal}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="accordion-item__end">
                                  <span className="accordion-item__status-pill" style={{ background: 'rgba(255,255,255,0.05)', color: '#94A3B8', borderColor: 'rgba(255,255,255,0.08)' }}>
                                    {day.badge || `Day ${numStr}`}
                                  </span>
                                  <span className="accordion-item__chevron">
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpenItem ? 'rotate-180' : ''}`} />
                                  </span>
                                </div>
                              </button>

                              {isOpenItem && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="accordion-item__content"
                                  style={{ display: 'block', padding: '18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                                  dir="rtl"
                                >
                                  {day.goal && (
                                    <div style={{ background: 'rgba(14, 165, 233, 0.08)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '10px', padding: '10px 14px', marginBottom: '14px', textAlign: 'right' }}>
                                      <span style={{ color: '#7DD3FC', fontWeight: 700, fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>الهدف:</span>
                                      <span style={{ color: '#F0F9FF', fontSize: '0.92rem', lineHeight: 1.7 }}>{day.goal}</span>
                                    </div>
                                  )}

                                  {day.mainContent && (
                                    <div style={{ background: 'rgba(2, 6, 23, 0.5)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '16px', marginBottom: '12px', textAlign: 'right' }}>
                                      <strong style={{ color: '#F8FAFC', fontSize: '0.96rem', display: 'block', marginBottom: '8px' }}>
                                        {day.mainContent.type || day.mainContent.title || 'محتوى اليوم'}
                                      </strong>
                                      {day.mainContent.concept && (
                                        <p style={{ margin: '0 0 12px 0', color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                          {day.mainContent.concept}
                                        </p>
                                      )}
                                      {day.mainContent.scenes?.map((s, sIdx) => (
                                        <div key={sIdx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px 14px', marginBottom: '8px' }}>
                                          <span style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>{s.num}</span>
                                          {s.visual && <p style={{ margin: '3px 0', color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.65 }}><strong style={{ color: '#94A3B8' }}>اللقطة:</strong> {s.visual}</p>}
                                          {s.text && <p style={{ margin: '3px 0', color: '#FEF08A', fontSize: '0.9rem', lineHeight: 1.7 }}><strong style={{ color: '#F59E0B' }}>النص:</strong> {s.text}</p>}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* M. STANDALONE SCRIPT TEXT */}
                  {!dbData?.scenes && !dbData?.episodes && !dbData?.reels && !dbData?.posts && !dbData?.days && allTables.length === 0 && !dbData?.trends && !dbData?.concepts && (dbData?.script || dbData?.answer) && (
                    <div style={{ marginTop: '4px' }} dir="rtl">
                      <ScriptBlockViewer scriptText={dbData.script || dbData.answer} />
                    </div>
                  )}

                  {/* N. FALLBACK CARD IF NO SPECIFIC CONTENT */}
                  {!dbData && !activeSheetUrl && (
                    <div
                      dir="rtl"
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        color: '#CBD5E1',
                        marginTop: '8px',
                        background: 'rgba(15, 23, 42, 0.6)',
                        padding: '20px 22px',
                        borderRadius: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        textAlign: 'right',
                      }}
                    >
                      <p style={{ color: '#94A3B8', margin: 0, lineHeight: 1.8 }}>
                        {deliverable.desc || 'Approved strategic deliverable document.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
