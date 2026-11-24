
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Details({ posts = [] }) {
  let path = window.location.pathname.split('/');
  let currentId = path[path.length - 1];

  const [id, setId] = useState(currentId);
  const [activeSection, setActiveSection] = useState('');

  let post = null;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
      post = posts[i];
      break;
    }
  }

  if (!post) {
    return (
      <div className="bg-[#090a0c] text-white text-center p-20">
        <h1 className="text-3xl font-bold mb-4"> المقال غير موجود </h1>
        <p className="text-gray-400 mb-6">عذراً، لم نتمكن من العثور على المقال.</p>
        <Link to="/blog" className="bg-orange-500 p-3 rounded-lg"> العودة إلى المدونة</Link>
      </div>
    );
  }

  let content = (post.content || '').split('\n\n');
  let headings = [];

  content.forEach(function (section, index) {
    if (section.startsWith('## ')) {
      headings.push({
        id: 'section-' + index,
        title: section.replace('## ', '')
      });
    }
  });

  let relatedPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (
      posts[i].category === post.category &&
      posts[i].id != post.id &&
      relatedPosts.length < 3
    ) {
      relatedPosts.push(posts[i]);
    }
  }

  function openRelatedPost(newId) {
    setId(newId);
    setActiveSection('');

    window.history.pushState(null, '', '/blog/' + newId);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function goToSection(headingId) {
    setActiveSection(headingId);
    const heading = document.getElementById(headingId);

    if (heading) {
      heading.scrollIntoView({
        behavior: 'smooth'
      });
    }

    window.history.pushState(null, '', '#' + headingId);
  }

  return (
    <article className="bg-[#090a0c] text-white p-5" dir="rtl">
      <div className="max-w-7xl mx-auto mb-12">

        <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-2xl mb-6" />
        <p className="text-orange-500 mb-3">{post.category} </p>
        <h1 className="text-3xl sm:text-5xl font-bold mb-5">{post.title}</h1>
        <p className="text-gray-400 mb-4">
          {post.date} • {post.readTime} </p>
        <div className="flex items-center gap-3">
          <img src={post.author?.avatar} alt="" className="w-12 h-12 rounded-full" />

          <div>
            <p>{post.author?.name}</p>
            <p className="text-gray-400 text-sm">
              {post.author?.role}
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <p className="text-gray-300 text-lg mb-8">
            {post.excerpt}
          </p>
          {content.map(function (section, index) {

            if (section.startsWith('## ')) {
              return (
                <h2
                  key={index}
                  id={'section-' + index}
                  className="text-2xl font-bold text-orange-500 mt-8 mb-4"
                >
                  {section.replace('## ', '')}
                </h2>
              );
            }

            return (
              <p
                key={index}
                className="text-gray-300 leading-8 mb-6"
              >
                {section}
              </p>
            );

          })}

          {post.tags && (
            <div className="border border-gray-800 p-5 rounded-xl my-8">
              <h3 className="font-bold mb-4">الوسوم</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map(function (tag, index) {
                  return (
                    <Link key={index} to={'/blog?category=' + encodeURIComponent(post.category)}
                      className="text-orange-500"> #{tag}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          <div className="border border-gray-800 p-5 rounded-xl my-8">
            <h3 className="font-bold mb-4">شارك المقال</h3>
            <button> نسخ الرابط</button>

            <a href={'https://api.whatsapp.com/send?text='} target="_blank" className="bg-gray-800 p-3 rounded-lg m-1 inline-block">WhatsApp</a>
            <a href={'https://www.linkedin.com/sharing/share-offsite/?url='} target="_blank" className="bg-gray-800 p-3 rounded-lg m-1 inline-block"> LinkedIn </a>
            <a href={'https://twitter.com/intent/tweet?text=&url='} target="_blank" className="bg-gray-800 p-3 rounded-lg m-1 inline-block" >X </a>
          </div>

          <div className="bg-[#18181b] p-6 rounded-2xl flex items-center gap-5">
            <img src={post.author?.avatar} alt="" className="w-20 h-20 rounded-xl object-cover" /> <div>
              <p className="text-orange-500 text-sm">كاتب المقال</p>
              <h3 className="font-bold text-xl">{post.author?.name}</h3>
              <p className="text-gray-400 text-sm"> {post.author?.role}</p>
              <p className="text-gray-400 text-sm mt-2"> مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير. </p>
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="bg-[#18181b] p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-5"> محتويات المقال </h3>
            {headings.length > 0 ? (
              headings.map(function (heading, index) {
                return (
                  <button
                    key={heading.id}
                    onClick={function () {
                      goToSection(heading.id);
                    }}
                    className="block text-right w-full p-3 mb-2 rounded-lg hover:bg-gray-800"
                    style={{
                      color: activeSection === heading.id ? '#f97316' : 'white'
                    }}
                  >
                    {index + 1}. {heading.title}
                  </button>
                );
              })

            ) : (

              <p className="text-gray-400"> لا توجد أقسام فرعية.</p>
            )}

          </div>
          <div className="bg-[#18181b] p-5 rounded-2xl">
            <p className="mb-3"> تاريخ النشر: {post.date}</p>
            <p> وقت القراءة: {post.readTime}</p>
          </div>
          <div className="bg-[#18181b] p-6 rounded-2xl text-center">
            <h3 className="font-bold mb-3"> لا تفوّت جديدنا</h3>
            <p className="text-gray-400 mb-4"> اشترك للحصول على أحدث المقالات</p>
            <Link to="/blog" className="bg-orange-500 p-3 rounded-lg block"> تصفح المزيد </Link>
          </div>
        </aside>
      </div>

      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8"> مقالات قد تعجبك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(function (item) {
              return (

                <div key={item.id} onClick={function () {
                  openRelatedPost(item.id);
                }}
                  className="bg-[#18181b] rounded-2xl overflow-hidden cursor-pointer">

                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <p className="text-orange-500 mb-3"> {item.category} </p>
                    <h3 className="font-bold mb-4">{item.title}</h3>

                    <p className="text-gray-400 text-sm">{item.author?.name} • {item.readTime}</p>
                  </div>
                </div>

              );
            })}

          </div>
        </section>
      )}

    </article>
  );
}
