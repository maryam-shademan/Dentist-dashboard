function Blog() {
  return (
    <>
   <div className="bg-white w-full mt-36">
   <div className="max-w-md mx-auto relative overflow-hidden  z-10 bg-gray-100 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-sky-800 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ساخت وبلاگ</h2>
        <form method="post" action="#">
          <div className="mb-4">
            <label className="text-sm text-gray-900 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              انتخاب عکس
            </label>
            <input
              className="flex w-full rounded-md border border-blue-300 border-input bg-gray-200 text-sm text-gray-900 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
              type="file"
              id="image-selection"
            />
            <label className="block text-sm mt-3 font-medium text-gray-900" htmlFor="title">
              تایتل
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-200 border border-gray-600 rounded-md text-gray-900"
              type="text"
              id="title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900" htmlFor="url">
              یوآرال
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-200 border border-gray-600 rounded-md text-gray-900"
              name="url"
              id="url"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900" htmlFor="bio">
              توضیحات
            </label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-200 border border-gray-600 rounded-md text-gray-900"
              rows={3}
              name="bio"
              id="bio"
              defaultValue={""}
            />
          </div>
          <div className=" flex items-center justify-center h-full">

                  <button
                    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                  >
                    حذف
                  </button>

                  <button
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                  >
                    انتشار
                  </button>
                </div>
        </form>
      </div>
   </div>





{/*پست های گذاشته شده */}
      <section id="recent-posts" className="py-12 bg-white">
        <div className="container mx-auto text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">پست‌های اخیر وبلاگ</h2>
        </div>

        <div className="container mx-auto px-4 items-center justify-center flex">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Post 1 */}
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt="Blog Post Image"
                />
              </div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">

                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  درمان‌های پیشرفته دندانپزشکی
                </h3>
                <p className="text-gray-600 text-sm ">
                  تجربه‌ای بدون درد با تکنولوژی‌های روز دنیا. سلامت دهان و دندان خود را به ما بسپارید.
                </p>
                <div className=" flex items-center justify-center h-full">

                  <button
                    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                  >
                    حذف
                  </button>

                
                </div>
              </div>
            </div>

            <div className="relative flex mt-4 w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt="تصویر وبلاگ"
                />
              </div>
              <div className="post-content p-4">
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  طراحی لبخند ایده‌آل
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  با خدمات حرفه‌ای زیبایی دندان، لبخندی درخشان و طبیعی داشته باشید. متخصصان ما همراه شما هستند.
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
                    type="button"
                    aria-label="حذف پست"
                  >
                    حذف
                  </button>
              
                </div>
              </div>
            </div>

            <div className="relative flex mt-4 w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt="تصویر وبلاگ"
                />
              </div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">

                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  ارتودنسی برای همه سنین
                </h3>
                <p className="text-gray-600 text-sm">
                  با روش‌های نوین ارتودنسی، زیبایی و تراز دندان‌های خود را تضمین کنید. مشاوره رایگان!              </p>
                <>
                  <div className="flex mt-7 justify-center space-x-4">
                    <button
                      className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
                      type="button"
                      aria-label="حذف پست"
                    >
                      حذف
                    </button>
                  
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  خدمات اورژانسی دندانپزشکی
                </h3>
                <p className="text-gray-600 text-sm ">
                  در مواقع اضطراری، کنار شما هستیم. ارائه خدمات فوری برای دردهای دندان و لثه.           </p>
                <>
                <div className="flex mt-7 justify-center space-x-4">
                    <button
                      className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
                      type="button"
                      aria-label="حذف پست"
                    >
                      حذف
                    </button>
                  
                  </div>
                </>

              </div>
            </div>
          </div>


        </div>

      </section>
    </>
  );
}

export default Blog;
