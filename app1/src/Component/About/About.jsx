import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const allAuthors = [
    {
      name: 'سالم أحمد',
      role: 'مصور محترف',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'محمد علي',
      role: 'مصور بورتريه',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'إبراهيم حسن',
      role: 'مصور طبيعة',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'داود خالد',
      role: 'مدرب تصوير',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'ليث محمود',
      role: 'فنان بصري',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'جمال عبدالله',
      role: 'مصور ومراجع تقني',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'خالد الفيصل',
      role: 'مصور فلكي',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'نادر سعيد',
      role: 'مصور شوارع',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'هاني الشمري',
      role: 'مصور طعام',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'دحام الحسيني',
      role: 'فنان بصري',
      avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'نايف المطيري',
      role: 'مصور مواليد',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'عبدالله الغامدي',
      role: 'مصور عقارات',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'كريم الفهد',
      role: 'خبير تقني',
      avatar: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'سلطان الراجحي',
      role: 'فنان تصوير',
      avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'فهد السبيعي',
      role: 'مراجع معدات',
      avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=150&h=150&fit=crop&crop=face',
    },
  ];

  
  const displayedAuthors = showAllAuthors ? allAuthors : allAuthors.slice(0, 9);

  return (
    <div className="min-h-screen bg-[#090a0c] text-white" dir="rtl">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-stone-800/80 hero-grid-pattern text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 35%, rgba(249, 115, 22, 0.16) 0%, rgba(249, 115, 22, 0.04) 50%, transparent 75%)',
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141416]/90 border border-stone-800 text-gray-300 text-xs sm:text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70"></span>
            <span>من نحن</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 font-sans">
            مهمتنا هي <span className="text-orange-500">الإعلام والإلهام</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">2+مليون</h3>
              <p className="text-gray-400 text-xs font-light">قارئ شهرياً</p>
            </div>
            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-regular fa-newspaper"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">500+</h3>
              <p className="text-gray-400 text-xs font-light">مقالة منشورة</p>
            </div>

            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-solid fa-pen-nib"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">50+</h3>
              <p className="text-gray-400 text-xs font-light">كاتب خبير</p>
            </div>

            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-solid fa-book-open"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">15+</h3>
              <p className="text-gray-400 text-xs font-light">تصنيف</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">قيمنا</h2>
            <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#141416] border border-stone-800/80 rounded-2xl p-7 text-center space-y-3 hover:border-orange-500/30 transition-all">
            <span className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl mx-auto mb-2">
              <i className="fa-regular fa-circle-dot"></i>
            </span>
            <h3 className="text-lg font-bold text-white">الجودة أولاً</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              محتوى مدروس ومكتوب بخبرة
            </p>
          </div>

          <div className="bg-[#141416] border border-stone-800/80 rounded-2xl p-7 text-center space-y-3 hover:border-orange-500/30 transition-all">
            <span className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl mx-auto mb-2">
              <i className="fa-solid fa-bolt"></i>
            </span>
            <h3 className="text-lg font-bold text-white">تركيز عملي</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              أمثلة واقعية يمكنك تطبيقها اليوم
            </p>
          </div>

          <div className="bg-[#141416] border border-stone-800/80 rounded-2xl p-7 text-center space-y-3 hover:border-orange-500/30 transition-all">
            <span className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl mx-auto mb-2">
              <i className="fa-solid fa-handshake"></i>
            </span>
            <h3 className="text-lg font-bold text-white">المجتمع</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              تعلم مع آلاف المصورين
            </p>
          </div>

          <div className="bg-[#141416] border border-stone-800/80 rounded-2xl p-7 text-center space-y-3 hover:border-orange-500/30 transition-all">
            <span className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl mx-auto mb-2">
              <i className="fa-solid fa-arrows-rotate"></i>
            </span>
            <h3 className="text-lg font-bold text-white">دائماً محدث</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              أحدث الاتجاهات وأفضل الممارسات
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#141416] border border-stone-800 text-orange-400 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>فريقنا</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            تعرف على كتابنا
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedAuthors.map((author, index) => (
            <div
              key={index}
              className="bg-[#141416] border border-stone-800/80 hover:border-orange-500/30 rounded-2xl p-8 flex flex-col items-center text-center space-y-3 transition-all"
            >
              <div className="relative mb-1">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-stone-700 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-5 h-5 bg-orange-500 border-2 border-[#141416] rounded-full flex items-center justify-center text-[10px] text-white">
                  ✓
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">{author.name}</h3>
              <p className="text-xs text-orange-400 font-medium">{author.role}</p>
              <div className="flex items-center gap-2 pt-2">
                <span className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 text-gray-500 flex items-center justify-center text-xs cursor-pointer hover:text-white transition-colors">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <span className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 text-gray-500 flex items-center justify-center text-xs cursor-pointer hover:text-white transition-colors">
                  <i className="fa-brands fa-github"></i>
                </span>
                <span className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 text-gray-500 flex items-center justify-center text-xs cursor-pointer hover:text-white transition-colors">
                  <i className="fa-brands fa-x-twitter"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={() => setShowAllAuthors(!showAllAuthors)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all active:scale-95 cursor-pointer"
          >
            <span>{showAllAuthors ? 'عرض أقل' : 'عرض المزيد'}</span>
            <i className={`fa-solid ${showAllAuthors ? 'fa-angle-up' : 'fa-angle-down'} text-xs`}></i>
          </button>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16 px-4 sm:px-6 lg:px-8 text-center text-white my-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/blog"
              className="px-6 py-2.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-medium text-sm transition-all"
            >
              تصفح المقالات
            </Link>
            <a
              href="mailto:contact@adasa.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-black hover:bg-stone-900 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <i className="fa-regular fa-envelope text-xs"></i>
              <span>تواصل معنا</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
