import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-black text-white">
      <div className="text-center max-w-md mx-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#141416] border border-stone-800/80 flex items-center justify-center text-gray-400 text-4xl mb-6 shadow-inner">
          <i className="fa-regular fa-face-frown"></i>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-sans"> الصفحة غير موجودة</h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 font-light"> عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all active:scale-95">
            <i className="fa-solid fa-house text-xs"></i>
            <span>العودة للرئيسية</span>
          </Link>

          <Link to="/blog" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#141416] hover:bg-stone-800 text-gray-300 hover:text-white border border-stone-800 font-semibold text-sm transition-all">
            <i className="fa-solid fa-newspaper text-xs text-orange-500"></i>
            <span>تصفح المقالات</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
