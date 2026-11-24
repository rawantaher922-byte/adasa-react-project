
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'إضاءة', count: '3 مقالة', icon: 'fa-sun' },
  { name: 'بورتريه', count: '3 مقالة', icon: 'fa-user' },
  { name: 'مناظر طبيعية', count: '2 مقالة', icon: 'fa-mountain' },
  { name: 'تقنيات', count: '5 مقالة', icon: 'fa-sliders' },
  { name: 'معدات', count: '3 مقالة', icon: 'fa-gear' }
];

function formatDate(date) {
  if (!date) return '';
  let parts = date.split('-');
  let months = [
    'يناير', 'فبراير', 'مارس', 'أبريل',
    'مايو', 'يونيو', 'يوليو', 'أغسطس',
    'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  return Number(parts[2]) + ' ' + months[Number(parts[1]) - 1] + ' ' + parts[0];
}

function SectionHeading({ badge, title, subtitle, button }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 text-right" dir="rtl">
      <div>
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#141416] border border-stone-800 text-orange-400 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="w-1 h-1 rounded-full bg-orange-500/70"></span>
            <span>{badge}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 font-sans">
          {title}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-light">{subtitle}</p>
      </div>

      {button && (
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all self-start sm:self-end active:scale-95"
        >
          <i className="fa-solid fa-angle-right text-xs"></i>
          <span>{button}</span>
        </Link>
      )}
    </div>
  );
}

function FeaturedCard({ post }) {
  return (
    <article className="bg-[#141416] border border-stone-800/80 hover:border-orange-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col lg:flex-row group" dir="rtl">
      <div className="relative lg:w-1/2 h-64 sm:h-72 lg:h-auto min-h-[300px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-500/30">
          <span>★</span>
          <span>مميز</span>
        </span>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 lg:w-1/2 flex flex-col justify-between text-right">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1.5">
              <i className="fa-regular fa-clock text-gray-500"></i>
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug group-hover:text-orange-400 transition-colors">
            <Link to={'/blog/' + post.id}>
              {post.title}
            </Link>
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mb-8">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-stone-800/80">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={post.author?.avatar}
                alt={post.author?.name}
                className="w-10 h-10 rounded-full object-cover border border-stone-700"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-orange-500 border-2 border-[#141416] rounded-full"></span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">{post.author?.name}</p>
              <p className="text-xs text-gray-500 font-light">{formatDate(post.date)}</p>
            </div>
          </div>

          <Link to={'/blog/' + post.id} className="text-orange-500 hover:text-orange-400 font-bold text-sm flex items-center gap-1.5 transition-colors group-hover:translate-x-1">
            <span>اقرأ المقال</span>
            <span>←</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function LatestCard({ post }) {
  return (
    <article className="bg-[#18181b] rounded-2xl overflow-hidden">

      <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
      <div className="p-5">

        <p className="text-gray-400 text-sm mb-3">
          {post.category} • {formatDate(post.date)}
        </p>

        <h3 className="text-xl font-bold mb-3">
          <Link to={'/blog/' + post.id}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-400 mb-5">
          {post.excerpt}
        </p>

        <p className="text-sm mb-4">
          {post.author?.name}
        </p>

        <Link to={'/blog/' + post.id} className="text-orange-500">
          اقرأ المقال ←
        </Link>

      </div>
    </article>
  );
}

export default function Home({ posts = [] }) {

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  let featuredPosts = posts.filter(function (post) {
    return post.featured;
  });

  let latestPosts = posts.filter(function (post) {
    return !post.featured;
  }).slice(0, 3);

  function handleSubscribe(event) {
    event.preventDefault();

    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <main className="bg-[#090a0c] text-white">
      <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-stone-800/80 hero-grid-pattern text-center">
        <div className="absolute inset-0 pointer-events-none" style={{
          background:
            'radial-gradient(ellipse at 50% 35%, rgba(249, 115, 22, 0.16) 0%, rgba(249, 115, 22, 0.04) 50%, transparent 75%)',
        }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141416]/90 border border-stone-800 text-gray-300 text-xs sm:text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70"></span>
            <span>مرحباً بك في عدسة</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-sans">
            اكتشف <span className="text-orange-500">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/blog" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all active:scale-95"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span>استكشف المقالات</span>
            </Link>

            <a href="#featured" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141416]/90 hover:bg-stone-800 text-gray-300 hover:text-white border border-stone-800 text-sm sm:text-base font-medium transition-all"
            >
              <i className="fa-regular fa-circle-question text-gray-400 text-sm"></i>
              <span>اعرف المزيد</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-regular fa-newspaper"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">50+</h3>
              <p className="text-gray-400 text-xs font-light">مقالة</p>
            </div>

            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">10+ألف</h3>
              <p className="text-gray-400 text-xs font-light">قارئ</p>
            </div>

            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-solid fa-folder"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">4</h3>
              <p className="text-gray-400 text-xs font-light">تصنيفات</p>
            </div>

            <div className="bg-[#141416]/80 border border-stone-800/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base mb-2">
                <i className="fa-solid fa-pen-nib"></i>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">6</h3>
              <p className="text-gray-400 text-xs font-light">كاتب</p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading badge="مميز" title="مقالات مختارة" subtitle="محتوى منتقى لبدء رحلة تعلمك" button="عرض الكل" />
        <div className="flex flex-col gap-8">
          {featuredPosts.slice(0, 3).map(function (post) {
            return (
              <FeaturedCard key={post.id} post={post} />
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-4"> استكشف حسب الموضوع </h2>
        <p className="text-gray-400 text-center mb-10"> اعثر على محتوى حسب اهتماماتك </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

          {categories.map(function (category) {
            return (
              <Link key={category.name} to={'/blog?category=' + encodeURIComponent(category.name)}
                className="bg-[#18181b] p-6 rounded-2xl text-center" >
                <i className={'fa-solid ' + category.icon + ' text-orange-500 text-2xl'}></i>
                <h3 className="font-bold mt-3"> {category.name}</h3>

                <p className="text-gray-400 text-sm mt-2">
                  {category.count}
                </p>
              </Link>
            );
          })}

        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6">

        <SectionHeading title="أحدث المقالات" subtitle="تعرف على أحدث ما نُشر في المدونة" button="عرض جميع المقالات" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map(function (post) {
            return (
              <LatestCard key={post.id} post={post} />
            );
          })}

        </div>
      </section>

      <section className="p-6 py-16">
        <div className="max-w-3xl mx-auto bg-[#18181b] p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4"> اشترك في نشرتنا الإخبارية </h2>
          <p className="text-gray-400 mb-6"> احصل على نصائح التصوير ومقالات جديدة في بريدك. </p>
          {subscribed ? (
            <p className="text-green-400"> تم اشتراكك بنجاح في نشرة عدسة!
            </p>
          ) : (
            <form onSubmit={handleSubscribe}>
              <input type="email" required placeholder="أدخل بريدك الإلكتروني" value={email} onChange={function (event) {
                setEmail(event.target.value);
              }}
                className="w-full p-3 rounded-lg bg-[#090a0c] mb-4 text-white" />

              <button type="submit" className="bg-orange-500 px-8 py-3 rounded-lg" > اشترك الآن</button>
            </form>

          )}

        </div>
      </section>

    </main>
  );
}
