import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-[#090a0c] text-white py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141416] border border-stone-800 text-gray-300 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>من نحن</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            عن مدونة <span className="text-orange-500">عدسة</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            منصة عربية رائدة متخصصة في فن التصوير الفوتوغرافي، تهدف إلى إثراء المحتوى العربي وتمكين المصورين من تطوير مهاراتهم عبر مقالات وتجارب عملية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#141416] border border-stone-800/80 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">رؤيتنا</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              أن نكون المرجع العربي الأول لكل شغوف بالتصوير الفوتوغرافي وصناعة الصورة، من المبتدئين وحتى المحترفين.
            </p>
          </div>

          <div className="bg-[#141416] border border-stone-800/80 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">رسالتنا</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              تقديم محتوى تعليمي احترافي يجمع بين القواعد الفنية والتقنيات الحديثة، ومشاركة التجارب الحية لإلهام مجتمع المصورين.
            </p>
          </div>
        </div>

        <div className="bg-[#141416] border border-stone-800/80 rounded-3xl p-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            جاهز لبدء رحلتك في عالم التصوير؟
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            استكشف مقالاتنا المتنوعة في الإضاءة، البورتريه، المناظر الطبيعية، وأحدث التقنيات والمعدات.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/blog" className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition-all active:scale-95" >
              استكشف المقالات
            </Link>
            <Link to="/" className="px-8 py-3 rounded-full bg-stone-900 border border-stone-800 hover:border-stone-700 text-gray-300 hover:text-white font-medium text-sm transition-all">
              الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

