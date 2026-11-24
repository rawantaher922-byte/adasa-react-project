
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();

    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');

      setTimeout(function () {
        setSubscribed(false);
      }, 4000);
    }
  }

  return (
    <footer className="relative bg-[#090a0c] text-gray-400 overflow-hidden border-t border-stone-800/80 pt-16 pb-8" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(249, 115, 22, 0.12) 0%, rgba(249, 115, 22, 0.03) 50%, transparent 75%)',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 text-right">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-orange-500/30">ع </span>
              <span className="text-2xl font-extrabold text-white tracking-tight">  عدسة </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a href="https://twitter.com" target="_blank" className="w-9 h-9 rounded-xl bg-[#141416] border border-stone-800 text-gray-400 hover:text-white hover:border-stone-700 flex items-center justify-center transition-all text-xs" >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://github.com" target="_blank" className="w-9 h-9 rounded-xl bg-[#141416] border border-stone-800 text-gray-400 hover:text-white hover:border-stone-700 flex items-center justify-center transition-all text-sm">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" className="w-9 h-9 rounded-xl bg-[#141416] border border-stone-800 text-gray-400 hover:text-white hover:border-stone-700 flex items-center justify-center transition-all text-xs">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" className="w-9 h-9 rounded-xl bg-[#141416] border border-stone-800 text-gray-400 hover:text-white hover:border-stone-700 flex items-center justify-center transition-all text-xs">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <h3 className="text-white font-bold text-base">استكشف</h3>
              <span className="w-5 h-0.5 bg-orange-500 rounded-full"></span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors"> الرئيسية</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-orange-500 transition-colors"> المدونة</Link>
              </li>
              <li>
                <span className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors"> من نحن</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <h3 className="text-white font-bold text-base">التصنيفات</h3>
              <span className="w-5 h-0.5 bg-orange-500 rounded-full"></span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/blog?category=إضاءة" className="text-gray-400 hover:text-orange-500 transition-colors">
                  إضاءة
                </Link>
              </li>
              <li>
                <Link to="/blog?category=بورتريه" className="text-gray-400 hover:text-orange-500 transition-colors">
                  بورتريه
                </Link>
              </li>
              <li>
                <Link to="/blog?category=مناظر طبيعية" className="text-gray-400 hover:text-orange-500 transition-colors">
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link to="/blog?category=تقنيات" className="text-gray-400 hover:text-orange-500 transition-colors">
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <h3 className="text-white font-bold text-base">ابقى على اطلاع</h3>
              <span className="w-5 h-0.5 bg-orange-500 rounded-full"></span>
            </div>
            <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed"> اشترك للحصول على أحدث المقالات والتحديثات. </p>

            {subscribed ? (
              <p className="text-green-400 text-sm py-2">تم الاشتراك بنجاح! شكراً لك.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input type="email" placeholder="أدخل بريدك الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-stone-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-right" />

                <button type="submit" className="w-full py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all active:scale-95"> اشترك</button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-stone-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1.5 order-2 sm:order-1">
            <span>© 2026 عدسة. صنع بكل</span>
            <span className="text-orange-500">🧡</span>
            <span>جميع الحقوق محفوظة.</span>
          </p>

          <div className="flex items-center gap-6 order-1 sm:order-2">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">
              سياسة الخصوصية
            </span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">
              شروط الخدمة
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
