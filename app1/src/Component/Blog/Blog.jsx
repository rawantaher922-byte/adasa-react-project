
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog({ posts = [] }) {

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(
    new URLSearchParams(window.location.search).get('category') || 'all'
  );
  const [page, setPage] = useState(1);
  const [view, setView] = useState('grid');

  const categories = [
    'all',
    'إضاءة',
    'بورتريه',
    'مناظر طبيعية',
    'تقنيات',
    'معدات'
  ];

  let filteredPosts = posts.filter(function (post) {

    let matchesCategory = true;
    let matchesSearch = true;

    if (category !== 'all' && post.category !== category) {
      matchesCategory = false;
    }

    if (search !== '') {
      if (
        !post.title.toLowerCase().includes(search.toLowerCase()) &&
        !(post.excerpt || '').toLowerCase().includes(search.toLowerCase())
      ) {
        matchesSearch = false;
      }
    }

    return matchesCategory && matchesSearch;
  });

  let postsPerPage = 6;
  let totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  let start = (page - 1) * postsPerPage;
  let currentPosts = filteredPosts.slice(start, start + postsPerPage);

  function resetFilters() {
    setSearch('');
    setCategory('all');
    setPage(1);
  }

  function changePage(newPage) {
    setPage(newPage);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="text-center py-16 border-b border-stone-900">
        <p className="text-orange-500">مدونتنا</p>

        <h1 className="text-4xl md:text-6xl font-bold my-4">
          استكشف <span className="text-orange-500">مقالاتنا</span>
        </h1>

        <p className="text-gray-400"> اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <input type="text" value={search} onChange={function (e) {
          setSearch(e.target.value); setPage(1);
        }}
          placeholder="ابحث في المقالات..."
          className="w-full bg-[#141416] border border-stone-800 rounded-xl p-3 mb-5" />
        <div className="flex gap-2 overflow-x-auto mb-8">
          {categories.map(function (item) {
            return (
              <button
                key={item}
                onClick={function () {
                  setCategory(item);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-xl whitespace-nowrap ${category === item
                  ? 'bg-orange-500'
                  : 'bg-[#141416] text-gray-400'
                  }`}
              >
                {item === 'all' ? 'جميع المقالات' : item}
              </button>
            );
          })}

        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">  عدد المقالات: {filteredPosts.length} </p>
          <div className="flex gap-3">
            {(search !== '' || category !== 'all') && (
              <button onClick={resetFilters} className="text-orange-400"> مسح الفلاتر </button>
            )}

            <button onClick={function () { setView('list'); }}>
              <i className={`fa-solid fa-bars ${view === 'list' ? 'text-orange-500' : 'text-gray-400'}`}></i>
            </button>

            <button onClick={function () { setView('grid'); }}>
              <i className={`fa-solid fa-table-cells-large ${view === 'grid' ? 'text-orange-500' : 'text-gray-400'}`}></i>
            </button>

          </div>
        </div>

        {currentPosts.length > 0 ? (

          <div className={
            view === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'flex flex-col gap-6'
          }>

            {currentPosts.map(function (post) {
              return (
                <article
                  key={post.id}
                  className={`bg-[#141416] border border-stone-800 rounded-2xl overflow-hidden ${view === 'list' ? 'md:flex' : ''
                    }`}
                >

                  <Link to={`/blog/${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover ${view === 'list' ? 'md:w-72 h-52' : 'h-52'
                        }`}
                    />
                  </Link>

                  <div className="p-5 flex-1">

                    <p className="text-orange-500 text-sm">
                      {post.category}
                    </p>

                    <p className="text-gray-400 text-xs my-3">
                      {post.readTime} • {post.date}
                    </p>

                    <h2 className="text-xl font-bold mb-3">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-400 text-sm mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center">

                      <div className="flex items-center gap-2">
                        <img src={post.author?.avatar} alt={post.author?.name} className="w-8 h-8 rounded-full" />
                        <span className="text-sm text-gray-300">
                          {post.author?.name}
                        </span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="text-orange-500"> اقرأ المقال </Link>
                    </div>
                  </div>
                </article>
              );
            })}

          </div>

        ) : (

          <div className="text-center py-20">
            <i className="fa-regular fa-face-frown text-5xl text-gray-400"></i>

            <h2 className="text-2xl font-bold my-4"> لا توجد مقالات </h2>
            <p className="text-gray-400 mb-6"> حاول تعديل البحث أو الفلتر. </p>
            <button onClick={resetFilters} className="bg-orange-500 px-6 py-3 rounded-xl"> إعادة تعيين الفلاتر</button>
          </div>

        )}

        {totalPages > 1 && currentPosts.length > 0 && (
          <div className="flex justify-center gap-2 mt-12">

            <button disabled={page === 1} onClick={function () { changePage(page - 1); }}
              className="bg-[#141416] px-4 py-2 rounded-lg disabled:opacity-40">
              <i class="fa-solid fa-arrow-right"></i>
            </button>

            {Array.from({ length: totalPages }, function (item, index) {
              return (
                <button
                  key={index}
                  onClick={function () {
                    changePage(index + 1);
                  }}
                  className={`w-9 h-9 rounded-lg ${page === index + 1 ? 'bg-orange-500' : 'bg-[#141416]'
                    }`}
                >
                  {index + 1}
                </button>
              );
            })}

            <button disabled={page === totalPages} onClick={function () {
              changePage(page + 1);
            }}
              className="bg-[#141416] px-4 py-2 rounded-lg disabled:opacity-40">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>

        )}

      </div>
    </div>
  );
}
