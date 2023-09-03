import React, { useState, useEffect } from 'react';
import '../../App.css'

function ShowBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.querySelector('.hide-scrollbar');
      if (el) {
        if (el.scrollTop + el.offsetHeight >= el.scrollHeight) {
          el.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          el.scrollTop += 500;
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const fetchBlogs = async () => {
    const data = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adsynthetica'
        // 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@internationalaffairs'
    );
    const blogs = await data.json();
    console.log('Blogs : ',blogs)
    setBlogs(blogs.items);
  };

  return (
    <div id='blog' className="Blog p-5 m-8">
      <div className="flex">
        <div className="w-2/3 mr-4">
          {blogs.slice(0, 1).map((blog) => (
            <div key={blog.guid} className="bg-black rounded-lg shadow-md p-4 border-custom-gradient">
              <img src={blog.thumbnail} alt={blog.title} className="w-full rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-white mb-2">{blog.pubDate}</p>
              {/* <p className="text-gray-700 mb-4">{blog.reading_time} min read</p> */}
              <div className="Frame7785 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded justify-start items-start gap-[3.64px] inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="transform hover:scale-110 transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-1/3 overflow-y-auto hide-scrollbar"
          style={{ maxHeight: '758px' }}
        >
          {blogs.slice(1).map((blog) => (
            <div key={blog.guid} className="bg-black rounded-lg shadow-md p-4 mb-4 border-custom-gradient">
              <img src={blog.thumbnail} alt={blog.title} className="w-full rounded-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-white mb-2">{blog.pubDate}</p>
              {/* <p className="text-gray-700 mb-4">{blog.reading_time} min read</p> */}

              <div className="Frame7785 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded justify-start items-start gap-[3.64px] inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="transform hover:scale-110 transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowBlog;
