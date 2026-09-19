import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Folder,
  LayoutGrid,
  List,
  X,
  ArrowRight,
  ArrowLeft,
  FileText,
  Film,
  Table as TableIcon,
  Images,
  Podcast,
  Rocket,
  ChevronRight,
  Flame,
  ExternalLink
} from 'lucide-react';
import { WORK_HIERARCHY_DATA, SCRIPT_DATABASE } from '../data/contentData';

export const getSheetLinks = (item) => {
  if (!item) return [];
  if (item.sheetLinks && item.sheetLinks.length > 0) return item.sheetLinks;
  if (item.sheetUrl) return [{ label: 'Open in Google Sheets', url: item.sheetUrl }];
  const db = SCRIPT_DATABASE ? SCRIPT_DATABASE[item.id] : null;
  if (db?.sheetLinks && db.sheetLinks.length > 0) return db.sheetLinks;
  if (db?.sheetUrl) return [{ label: 'Open in Google Sheets', url: db.sheetUrl }];
  return [];
};

export const isSheetDeliverable = (item) => {
  if (!item) return false;
  return (
    item.type === 'sheet_plan' ||
    item.type === 'xlsx' ||
    Boolean(item.sheetUrl) ||
    Boolean(item.sheetLinks && item.sheetLinks.length > 0) ||
    getSheetLinks(item).length > 0
  );
};


const SECTORS = [
  {
    key: 'medical',
    label: 'Healthcare',
    labelAr: 'القطاع الطبي',
    icon: 'fa-solid fa-stethoscope',
    color: '#10B981',
  },
  {
    key: 'commercial',
    label: 'Commercial & Retail',
    labelAr: 'العلامات التجارية',
    icon: 'fa-solid fa-cart-shopping',
    color: '#0EA5E9',
  },
  {
    key: 'food',
    label: 'Food & Dining',
    labelAr: 'المطاعم والأغذية',
    icon: 'fa-solid fa-utensils',
    color: '#F59E0B',
  },
  {
    key: 'realestate',
    label: 'Brand Strategy',
    labelAr: 'استراتيجية البراند',
    icon: 'fa-solid fa-chess-knight',
    color: '#8B5CF6',
  }
];

export default function FinderModal({ isOpen, onClose, categoryKey = 'medical', onOpenDeliverable }) {
  const [currentCategoryKey, setCurrentCategoryKey] = useState(categoryKey);
  const [currentLevel, setCurrentLevel] = useState('folder'); // 'folder' | 'client'
  const [currentClientId, setCurrentClientId] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [activeTypeFilter, setActiveTypeFilter] = useState('all');

  useEffect(() => {
    if (categoryKey) {
      setCurrentCategoryKey(categoryKey);
      setCurrentLevel('folder');
      setCurrentClientId(null);
      setSearchQuery('');
      setActiveTypeFilter('all');
    }
  }, [categoryKey, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const currentCategory =
    WORK_HIERARCHY_DATA.categories[currentCategoryKey] || WORK_HIERARCHY_DATA.categories.medical;
  const currentClient = currentClientId
    ? currentCategory.clients?.find((c) => c.id === currentClientId)
    : null;

  const currentSectorObj = SECTORS.find((s) => s.key === currentCategoryKey);
  const sectorTitleEn = currentSectorObj?.label || currentCategory.name;
  const sectorAccent = currentClient?.color || currentCategory.accentColor || '#38BDF8';

  // Global search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.trim().toLowerCase();
    const results = [];

    Object.entries(WORK_HIERARCHY_DATA.categories).forEach(([catKey, cat]) => {
      cat.clients?.forEach((cl) => {
        const clientMatches =
          cl.name.toLowerCase().includes(q) ||
          cl.tag.toLowerCase().includes(q) ||
          (cl.subtitle && cl.subtitle.toLowerCase().includes(q));

        const matchedDeliverables = (cl.deliverables || []).filter((d) =>
          d.title.toLowerCase().includes(q) ||
          (d.badge && d.badge.toLowerCase().includes(q))
        );

        if (clientMatches || matchedDeliverables.length > 0) {
          results.push({
            client: cl,
            category: cat,
            catKey,
            matchedDeliverables: matchedDeliverables.length > 0 ? matchedDeliverables : cl.deliverables || []
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  // Filter deliverables
  const filteredDeliverables = useMemo(() => {
    if (!currentClient || !currentClient.deliverables) return [];
    if (activeTypeFilter === 'all') return currentClient.deliverables;

    return currentClient.deliverables.filter((d) => {
      if (activeTypeFilter === 'script') return d.type === 'script';
      if (activeTypeFilter === 'sheet') return isSheetDeliverable(d);
      if (activeTypeFilter === 'posts') return d.type === 'approved_posts';
      if (activeTypeFilter === 'pdf') return d.type === 'pdf_deck' || d.type === 'pdf';
      if (activeTypeFilter === 'episodes') return d.type === 'episodes';
      return true;
    });
  }, [currentClient, activeTypeFilter]);

  const handleClientClick = (client, catKey) => {
    if (catKey) setCurrentCategoryKey(catKey);
    setCurrentClientId(client.id);
    setCurrentLevel('client');
    setSearchQuery('');
    setActiveTypeFilter('all');
  };

  const handleBackToSector = () => {
    setCurrentLevel('folder');
    setCurrentClientId(null);
    setSearchQuery('');
    setActiveTypeFilter('all');
  };

  const handleSectorSelect = (key) => {
    setCurrentCategoryKey(key);
    setCurrentLevel('folder');
    setCurrentClientId(null);
    setSearchQuery('');
    setActiveTypeFilter('all');
  };

  const getGridClass = (count) => {
    if (count <= 1) return 'grid grid-cols-1 max-w-xl mx-auto gap-4';
    if (count === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
    if (count === 3) return 'grid grid-cols-1 sm:grid-cols-3 gap-4';
    if (count === 4) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
  };

  const getItemTypeMeta = (type) => {
    switch (type) {
      case 'script':
        return { label: 'Video Script', color: '#F43F5E', icon: Film, bg: 'rgba(244, 63, 94, 0.14)' };
      case 'sheet_plan':
      case 'xlsx':
        return { label: 'Content Plan', color: '#10B981', icon: TableIcon, bg: 'rgba(16, 185, 129, 0.14)' };
      case 'pdf_deck':
      case 'pdf':
        return { label: 'Presentation Deck', color: '#8B5CF6', icon: FileText, bg: 'rgba(139, 92, 246, 0.14)' };
      case 'approved_posts':
        return { label: 'Approved Posts', color: '#0EA5E9', icon: Images, bg: 'rgba(14, 165, 233, 0.14)' };
      case 'episodes':
        return { label: 'Podcast Series', color: '#EC4899', icon: Podcast, bg: 'rgba(236, 72, 153, 0.14)' };
      case 'launch_plan':
        return { label: 'Launch Plan', color: '#F97316', icon: Rocket, bg: 'rgba(249, 115, 22, 0.14)' };
      case 'trends_library':
        return { label: 'Trends Library', color: '#F59E0B', icon: Flame, bg: 'rgba(245, 158, 11, 0.14)' };
      default:
        return { label: 'Deliverable', color: '#38BDF8', icon: FileText, bg: 'rgba(56, 189, 248, 0.14)' };
    }
  };

  // Intelligent category grouping for balanced, stunning layout with zero lonely orphan cards!
  const deliverableGroups = useMemo(() => {
    if (!filteredDeliverables || filteredDeliverables.length === 0) return [];

    const groupDefinitions = [
      {
        key: 'scripts',
        title: 'اسكريبتات الفيديو الإعلانية (Video Scripts)',
        icon: Film,
        color: '#F43F5E',
        badge: 'Video Scripts',
        matcher: (d) => d.type === 'script',
      },
      {
        key: 'plans',
        title: 'خطط وجداول المحتوى الشهري (Content Plans & Calendars)',
        icon: TableIcon,
        color: '#10B981',
        badge: 'Content Plans',
        matcher: (d) => isSheetDeliverable(d),
      },
      {
        key: 'episodes',
        title: 'سلاسل البودكاست والفيديوهات (Podcast & Video Series)',
        icon: Podcast,
        color: '#EC4899',
        badge: 'Podcast Series',
        matcher: (d) => d.type === 'episodes',
      },
      {
        key: 'trends',
        title: 'بنك الأفكار والتريندات المعتمدة (Trends & References)',
        icon: Flame,
        color: '#F59E0B',
        badge: 'Trends Library',
        matcher: (d) => d.type === 'trends_library',
      },
      {
        key: 'posts',
        title: 'البوستات والمحتوى المعتمد (Approved Posts & Copy)',
        icon: Images,
        color: '#0EA5E9',
        badge: 'Approved Posts',
        matcher: (d) => d.type === 'approved_posts',
      },
      {
        key: 'decks',
        title: 'العروض والاستراتيجيات (Presentations & Decks)',
        icon: FileText,
        color: '#8B5CF6',
        badge: 'Strategy Decks',
        matcher: (d) => d.type === 'pdf_deck' || d.type === 'pdf',
      },
      {
        key: 'other',
        title: 'مخرجات وملفات إضافية (Other Deliverables)',
        icon: FileText,
        color: '#38BDF8',
        badge: 'Deliverable',
        matcher: () => true,
      },
    ];

    const matchedGroups = [];
    const usedIds = new Set();

    for (const gDef of groupDefinitions) {
      const items = filteredDeliverables.filter((d) => {
        const id = d.id || d.title;
        if (usedIds.has(id)) return false;
        return gDef.matcher(d);
      });
      if (items.length > 0) {
        items.forEach((d) => usedIds.add(d.id || d.title));
        matchedGroups.push({
          ...gDef,
          items,
        });
      }
    }

    return matchedGroups;
  }, [filteredDeliverables]);

  // Standard deliverable card
  const renderDeliverableCard = (item, idx, extraClass = '') => {
    const meta = getItemTypeMeta(item.type);
    const IconComponent = meta.icon;
    const isSheet = isSheetDeliverable(item);
    const sheetLinks = isSheet ? getSheetLinks(item) : [];
    const primaryUrl = sheetLinks[0]?.url;

    return (
      <div
        key={item.id || idx}
        className={`bg-slate-900/50 hover:bg-slate-900/80 border ${
          isSheet
            ? 'border-emerald-500/25 hover:border-emerald-400 hover:shadow-emerald-950/50'
            : 'border-white/10 hover:border-sky-500/40 hover:shadow-sky-950/40'
        } rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-sm ${extraClass}`}
        onClick={() => {
          if (isSheet && primaryUrl) {
            window.open(primaryUrl, '_blank', 'noopener,noreferrer');
          } else {
            onOpenDeliverable(item, currentClient, currentCategory);
          }
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1"
              style={{ background: meta.bg, color: meta.color }}
            >
              <IconComponent className="w-3 h-3" />
              <span>{item.badge || meta.label}</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              {meta.label}
            </span>
          </div>

          <div className="flex items-center gap-2.5 mb-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
              style={{ background: meta.bg, color: meta.color }}
            >
              <IconComponent className="w-4 h-4" />
            </div>
            <h4
              className={`text-sm font-bold text-white m-0 transition-colors leading-snug ${
                isSheet ? 'group-hover:text-emerald-300' : 'group-hover:text-sky-300'
              }`}
              dir="rtl"
              style={{ textAlign: 'right', width: '100%' }}
            >
              {item.title}
            </h4>
          </div>
        </div>

        <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-xs gap-2">
          {isSheet ? (
            sheetLinks.length > 1 ? (
              <div className="flex items-center gap-1.5 w-full flex-wrap">
                {sheetLinks.map((sl, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-2 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-sm cursor-pointer flex-1 justify-center min-w-[110px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(sl.url, '_blank', 'noopener,noreferrer');
                    }}
                    title={sl.label}
                  >
                    <TableIcon className="w-3 h-3 text-emerald-200 shrink-0" />
                    <span className="truncate">{sl.label || `فتح شيت ${sIdx + 1} ↗`}</span>
                  </button>
                ))}
              </div>
            ) : (
              <button
                type="button"
                className="w-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (primaryUrl) {
                    window.open(primaryUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
                title="فتح في Google Sheets"
              >
                <TableIcon className="w-3.5 h-3.5 text-emerald-200" />
                <span>فتح في Google Sheets ↗</span>
              </button>
            )
          ) : (
            <span className="text-sky-400 group-hover:text-sky-300 transition-colors flex items-center gap-1 font-medium ml-auto">
              <span>Details</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>
    );
  };

  // Featured full-width deliverable card (for single-item highlights such as master trends library)
  const renderFeaturedDeliverableCard = (item, idx) => {
    const meta = getItemTypeMeta(item.type);
    const IconComponent = meta.icon;
    const isSheet = isSheetDeliverable(item);
    const sheetLinks = isSheet ? getSheetLinks(item) : [];
    const primaryUrl = sheetLinks[0]?.url;

    return (
      <div
        key={item.id || idx}
        className={`w-full bg-slate-900/60 hover:bg-slate-900/90 border ${
          isSheet
            ? 'border-emerald-500/25 hover:border-emerald-400 hover:shadow-emerald-950/40'
            : 'border-white/12 hover:border-amber-500/40 hover:shadow-sky-950/40'
        } rounded-xl p-4 sm:p-5 cursor-pointer transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group shadow-md`}
        onClick={() => {
          if (isSheet && primaryUrl) {
            window.open(primaryUrl, '_blank', 'noopener,noreferrer');
          } else {
            onOpenDeliverable(item, currentClient, currentCategory);
          }
        }}
      >
        <div className="flex items-center gap-3.5" dir="rtl" style={{ textAlign: 'right' }}>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-inner"
            style={{ background: meta.bg, color: meta.color }}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1"
                style={{ background: meta.bg, color: meta.color }}
              >
                <IconComponent className="w-3 h-3" />
                <span>{item.badge || meta.label}</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {isSheet ? 'جدول معتمد مباشر' : 'مكتبة مرجعية معتمدة'}
              </span>
            </div>
            <h4
              className={`text-sm sm:text-base font-bold text-white m-0 transition-colors ${
                isSheet ? 'group-hover:text-emerald-300' : 'group-hover:text-amber-300'
              }`}
            >
              {item.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
          {isSheet ? (
            <button
              type="button"
              className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-3.5 py-2 rounded-lg flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                if (primaryUrl) {
                  window.open(primaryUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <TableIcon className="w-3.5 h-3.5 text-emerald-200" />
              <span>فتح في Google Sheets ↗</span>
            </button>
          ) : (
            <span className="text-xs font-bold text-sky-400 group-hover:text-sky-300 transition-colors flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-lg">
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="finder-modal-overlay open"
        id="finderModalOverlay"
        role="dialog"
        aria-label="Work Explorer"
        data-lenis-prevent="true"
      >
        <motion.div
          className="finder-modal-backdrop"
          id="finderModalBackdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <div
          className={`finder-modal-dialog ${isFullscreen ? 'finder-modal-dialog--fullscreen' : ''}`}
          data-lenis-prevent="true"
        >
          <motion.div
            className="finder-window flex flex-col min-h-0 h-full"
            id="finderWindow"
            data-lenis-prevent="true"
            style={{
              '--sector-accent': sectorAccent,
              ...(isFullscreen ? { width: '99vw', height: '96vh', maxWidth: 'none' } : {}),
            }}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          >
            {/* Top Toolbar */}
            <div className="finder-titlebar shrink-0 flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-950/90 border-b border-white/10" data-lenis-prevent="true">
              <div className="flex items-center gap-2">
                <div className="finder-traffic-lights">
                  <button className="t-btn t-btn--red" onClick={onClose} title="Close"></button>
                  <button className="t-btn t-btn--yellow" onClick={onClose} title="Minimize"></button>
                  <button className="t-btn t-btn--green" onClick={() => setIsFullscreen(!isFullscreen)} title="Fullscreen"></button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-xs sm:max-w-sm mx-2 sm:mx-4">
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search work..."
                    className="w-full bg-slate-900/90 border border-white/10 rounded-lg py-1 pl-8 pr-7 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-all text-left"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-2.5 text-slate-400 hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* View Switchers & Close */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="hidden sm:flex items-center bg-slate-900 border border-white/10 rounded-md p-0.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1 rounded text-xs transition-colors ${viewMode === 'grid' ? 'bg-sky-500/20 text-sky-300' : 'text-slate-400 hover:text-white'}`}
                    title="Grid"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1 rounded text-xs transition-colors ${viewMode === 'list' ? 'bg-sky-500/20 text-sky-300' : 'text-slate-400 hover:text-white'}`}
                    title="List"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  onClick={onClose}
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Breadcrumbs Path (English UI Chrome) */}
            <div className="px-3 sm:px-5 py-2 bg-slate-950/60 border-b border-white/5 flex items-center justify-between text-xs text-slate-300 shrink-0" data-lenis-prevent="true">
              <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                <button
                  onClick={() => {
                    setCurrentLevel('folder');
                    setCurrentClientId(null);
                    setSearchQuery('');
                  }}
                  className="hover:text-sky-300 transition-colors font-medium flex items-center gap-1.5 text-slate-400 shrink-0"
                >
                  <Folder className="w-3.5 h-3.5 text-sky-400" />
                  <span>Folders</span>
                </button>

                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />

                <button
                  onClick={handleBackToSector}
                  className={`transition-colors font-medium truncate ${
                    currentLevel === 'folder' ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sectorTitleEn}
                </button>

                {currentLevel === 'client' && currentClient && (
                  <>
                    <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                    <span className="font-bold text-sky-300 truncate" dir="rtl">{currentClient.name}</span>
                  </>
                )}
              </div>

              {currentLevel === 'client' && (
                <button
                  onClick={handleBackToSector}
                  className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors shrink-0 ml-2"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
              )}
            </div>

            {/* Mobile Sector Pills Bar (Phones & Small Tablets) */}
            <div className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-slate-950/90 border-b border-white/5 overflow-x-auto shrink-0" data-lenis-prevent="true">
              {SECTORS.map((sec) => {
                const isActive = currentCategoryKey === sec.key;
                return (
                  <button
                    key={sec.key}
                    onClick={() => handleSectorSelect(sec.key)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-sky-500/20 text-white border border-sky-500/40 shadow-sm'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <i className={sec.icon} style={{ color: sec.color, fontSize: '0.75rem' }}></i>
                    <span>{sec.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Split Container */}
            <div className="finder-body flex-1 min-h-0 h-full flex flex-col md:flex-row overflow-hidden" data-lenis-prevent="true">
              {/* Desktop Sidebar */}
              <aside
                className="hidden md:flex w-52 bg-slate-950/80 border-r border-white/5 p-3 flex-col shrink-0 overflow-y-auto min-h-0"
                data-lenis-prevent="true"
                style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
              >
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">
                  SECTORS
                </div>
                <nav className="space-y-1">
                  {SECTORS.map((sec) => {
                    const isActive = currentCategoryKey === sec.key;
                    const catData = WORK_HIERARCHY_DATA.categories[sec.key];
                    const clientCount = catData?.clients?.length || 0;
                    return (
                      <button
                        key={sec.key}
                        onClick={() => handleSectorSelect(sec.key)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-sky-500/15 text-white border border-sky-500/30 shadow-sm'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <i className={sec.icon} style={{ color: sec.color }}></i>
                          <span className="truncate">{sec.label}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">{clientCount}</span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Main Content Area */}
              <main
                className="finder-main-panel flex-1 min-h-0 h-full overflow-y-auto bg-slate-950/30 flex flex-col"
                id="finderMainPanel"
                data-lenis-prevent="true"
                style={{
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain',
                }}
              >
                {/* Header Info */}
                {!searchQuery && (
                  <div className="p-3.5 sm:p-5 border-b border-white/5 shrink-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider"
                            style={{ background: `${sectorAccent}18`, color: sectorAccent }}
                          >
                            {currentLevel === 'client' ? currentClient?.tag : currentCategory.tag}
                          </span>
                          <span className="text-xs text-slate-400">
                            {currentLevel === 'client'
                              ? `${currentClient?.deliverables?.length || 0} Deliverables`
                              : `${currentCategory.clients?.length || 0} Clients`}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-0" dir={currentLevel === 'client' ? 'rtl' : 'ltr'}>
                          {currentLevel === 'client' ? currentClient?.name : sectorTitleEn}
                        </h3>
                      </div>
                    </div>

                    {/* Filter Pills in Client View */}
                    {currentLevel === 'client' && (
                      <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-white/5 overflow-x-auto">
                        {[
                          { id: 'all', label: 'All' },
                          { id: 'script', label: 'Reels' },
                          { id: 'sheet', label: 'Plans' },
                          { id: 'posts', label: 'Posts' },
                          { id: 'pdf', label: 'Decks' },
                          { id: 'episodes', label: 'Podcasts' }
                        ].map((flt) => (
                          <button
                            key={flt.id}
                            onClick={() => setActiveTypeFilter(flt.id)}
                            className={`px-2.5 py-1 rounded-md text-xs transition-colors whitespace-nowrap ${
                              activeTypeFilter === flt.id
                                ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-400/30'
                                : 'bg-white/5 text-slate-400 hover:text-white'
                            }`}
                          >
                            {flt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Files Grid Area */}
                <div
                  className="p-3.5 sm:p-5 pb-20 flex-1"
                  data-lenis-prevent="true"
                >
                  {/* SEARCH RESULTS */}
                  {searchQuery && searchResults ? (
                    <div>
                      <div className="text-xs text-slate-400 mb-3">
                        Search Results ({searchResults.length}):
                      </div>

                      {searchResults.length === 0 ? (
                        <div className="text-center py-12 text-slate-500 text-xs">
                          No matching results found
                        </div>
                      ) : (
                        <div className={getGridClass(searchResults.length)}>
                          {searchResults.map(({ client, category, catKey, matchedDeliverables }, sIdx) => (
                            <div
                              key={sIdx}
                              className="bg-slate-900/50 border border-white/10 rounded-xl p-3.5 hover:border-sky-500/40 transition-colors flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div dir="rtl" className="text-right">
                                  <h4 className="text-white font-bold text-sm">{client.name}</h4>
                                  <span className="text-[11px] text-slate-400">{category.name}</span>
                                </div>
                                <button
                                  onClick={() => handleClientClick(client, catKey)}
                                  className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                                >
                                  <span>Open</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>

                              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5" dir="rtl">
                                {matchedDeliverables.map((item, dIdx) => {
                                  const isSheet = isSheetDeliverable(item);
                                  const sheetLinks = isSheet ? getSheetLinks(item) : [];
                                  const primaryUrl = sheetLinks[0]?.url;

                                  return (
                                    <button
                                      key={dIdx}
                                      onClick={() => {
                                        if (isSheet && primaryUrl) {
                                          window.open(primaryUrl, '_blank', 'noopener,noreferrer');
                                        } else {
                                          onOpenDeliverable(item, client, category);
                                        }
                                      }}
                                      className={`text-xs px-2.5 py-1 rounded transition-colors text-right truncate max-w-[220px] flex items-center gap-1.5 ${
                                        isSheet
                                          ? 'bg-emerald-500/15 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 font-bold'
                                          : 'bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-white'
                                      }`}
                                      title={isSheet ? 'فتح في Google Sheets' : item.title}
                                    >
                                      {isSheet && <TableIcon className="w-3 h-3 text-emerald-400 shrink-0" />}
                                      <span className="truncate">{item.title}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : currentLevel === 'folder' ? (
                    // LEVEL 1: CLIENTS
                    viewMode === 'grid' ? (
                      <div className={getGridClass(currentCategory.clients?.length || 0)}>
                        {currentCategory.clients?.map((client, idx) => {
                          const clientAccent = client.color || sectorAccent;
                          const delivsCount = client.deliverables ? client.deliverables.length : 0;
                          return (
                            <div
                              key={client.id || idx}
                              className="bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-sky-500/40 rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between group"
                              onClick={() => handleClientClick(client)}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span
                                    className="text-[10px] font-semibold px-2 py-0.5 rounded"
                                    style={{ background: `${clientAccent}18`, color: clientAccent }}
                                  >
                                    {client.tag}
                                  </span>
                                  <span className="text-[11px] text-slate-400 font-mono">
                                    {delivsCount} Files
                                  </span>
                                </div>

                                <div className="flex items-center gap-3 mb-2">
                                  <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 transition-transform group-hover:scale-105"
                                    style={{ background: `${clientAccent}20`, color: clientAccent }}
                                  >
                                    <i className={client.icon || 'fa-solid fa-folder'}></i>
                                  </div>
                                  <div className="min-w-0" dir="rtl" style={{ textAlign: 'right', width: '100%' }}>
                                    <h4 className="text-sm font-bold text-white m-0 truncate group-hover:text-sky-300 transition-colors">
                                      {client.name}
                                    </h4>
                                    <p className="text-xs text-slate-400 m-0 truncate">
                                      {client.subtitle || client.tag}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="pt-2.5 border-t border-white/5 flex items-center justify-end text-xs text-sky-400 group-hover:text-sky-300 transition-colors">
                                <span className="flex items-center gap-1 font-medium">
                                  <span>Explore</span>
                                  <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="bg-slate-900/80 text-slate-400 border-b border-white/5 font-semibold">
                              <th className="p-3">Client</th>
                              <th className="p-3">Category</th>
                              <th className="p-3">Files</th>
                              <th className="p-3 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {currentCategory.clients?.map((client, idx) => (
                              <tr
                                key={idx}
                                className="hover:bg-sky-500/10 transition-colors cursor-pointer"
                                onClick={() => handleClientClick(client)}
                              >
                                <td className="p-3 font-semibold text-white flex items-center gap-2" dir="rtl">
                                  <span style={{ color: client.color || sectorAccent }}>
                                    <i className={client.icon || 'fa-solid fa-folder'}></i>
                                  </span>
                                  <span>{client.name}</span>
                                </td>
                                <td className="p-3 text-slate-400">{client.tag}</td>
                                <td className="p-3 text-slate-500 font-mono">{client.deliverables?.length || 0}</td>
                                <td className="p-3 text-right">
                                  <span className="text-sky-400 hover:underline">Open</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  ) : (
                    // LEVEL 2: DELIVERABLES
                    viewMode === 'grid' ? (
                      deliverableGroups.length > 1 ? (
                        <div className="space-y-6">
                          {deliverableGroups.map((group) => {
                            const count = group.items.length;
                            const GroupIcon = group.icon;

                            return (
                              <div key={group.key} className="space-y-3">
                                {/* Category Section Header */}
                                <div className="flex items-center justify-between pb-2 border-b border-white/5" dir="rtl">
                                  <div className="flex items-center gap-2">
                                    <div
                                      className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                                      style={{ background: `${group.color}22`, color: group.color }}
                                    >
                                      <GroupIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <h4 className="text-xs font-bold text-slate-200 tracking-wide m-0">
                                      {group.title}
                                    </h4>
                                  </div>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 font-semibold">
                                    {count} {count === 1 ? 'ملف' : 'ملفات'}
                                  </span>
                                </div>

                                {/* Items Container: perfectly balanced per category! */}
                                {count === 1 ? (
                                  renderFeaturedDeliverableCard(group.items[0], 0)
                                ) : (
                                  <div
                                    className={
                                      count === 2
                                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
                                        : count === 3
                                        ? 'grid grid-cols-1 sm:grid-cols-3 gap-4'
                                        : count === 4
                                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
                                        : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                                    }
                                  >
                                    {group.items.map((item, idx) =>
                                      renderDeliverableCard(item, idx)
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        /* Single category or search query results with balanced columns */
                        <div
                          className={
                            filteredDeliverables.length === 1
                              ? 'grid grid-cols-1 max-w-xl mx-auto gap-4'
                              : filteredDeliverables.length === 2
                              ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
                              : filteredDeliverables.length === 3
                              ? 'grid grid-cols-1 sm:grid-cols-3 gap-4'
                              : filteredDeliverables.length === 4
                              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
                              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                          }
                        >
                          {filteredDeliverables.map((item, idx) => {
                            const isOddOrphan =
                              filteredDeliverables.length % 3 === 1 &&
                              idx === filteredDeliverables.length - 1;
                            return renderDeliverableCard(
                              item,
                              idx,
                              isOddOrphan ? 'sm:col-span-2 lg:col-span-3' : ''
                            );
                          })}
                        </div>
                      )
                    ) : (
                      <div className="bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="bg-slate-900/80 text-slate-400 border-b border-white/5 font-semibold">
                              <th className="p-3">Deliverable</th>
                              <th className="p-3">Type</th>
                              <th className="p-3">Tag</th>
                              <th className="p-3 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {filteredDeliverables.map((item, idx) => {
                              const meta = getItemTypeMeta(item.type);
                              const IconComponent = meta.icon;
                              const isSheet = isSheetDeliverable(item);
                              const sheetLinks = isSheet ? getSheetLinks(item) : [];
                              const primaryUrl = sheetLinks[0]?.url;

                              return (
                                <tr
                                  key={idx}
                                  className={`transition-colors cursor-pointer ${
                                    isSheet ? 'hover:bg-emerald-500/10' : 'hover:bg-sky-500/10'
                                  }`}
                                  onClick={() => {
                                    if (isSheet && primaryUrl) {
                                      window.open(primaryUrl, '_blank', 'noopener,noreferrer');
                                    } else {
                                      onOpenDeliverable(item, currentClient, currentCategory);
                                    }
                                  }}
                                >
                                  <td className="p-3 font-semibold text-white flex items-center gap-2" dir="rtl">
                                    <IconComponent className="w-3.5 h-3.5 shrink-0" style={{ color: isSheet ? '#10B981' : meta.color }} />
                                    <span>{item.title}</span>
                                  </td>
                                  <td className="p-3 text-slate-400">{isSheet ? 'Google Sheets' : meta.label}</td>
                                  <td className="p-3">
                                    <span
                                      className="text-[10px] px-1.5 py-0.5 rounded font-mono"
                                      style={{ background: isSheet ? 'rgba(16, 185, 129, 0.15)' : meta.bg, color: isSheet ? '#34D399' : meta.color }}
                                    >
                                      {item.badge || 'Document'}
                                    </span>
                                  </td>
                                  <td className="p-3 text-right">
                                    {isSheet ? (
                                      <button
                                        type="button"
                                        className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-2.5 py-1 rounded-md inline-flex items-center gap-1 cursor-pointer transition-all shadow-sm"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (primaryUrl) {
                                            window.open(primaryUrl, '_blank', 'noopener,noreferrer');
                                          }
                                        }}
                                      >
                                        <TableIcon className="w-3 h-3 text-emerald-100" />
                                        <span>فتح الشيت ↗</span>
                                      </button>
                                    ) : (
                                      <span className="text-sky-400 hover:underline font-medium">
                                        View Details
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )
                  )}
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-slate-950 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 shrink-0 mt-auto">
                  <span>
                    {currentLevel === 'client'
                      ? `${filteredDeliverables.length} Deliverables`
                      : `${currentCategory.clients?.length || 0} Clients`}
                  </span>
                  <span className="font-mono text-[10px]">shahd.ic · Explorer</span>
                </div>
              </main>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
