function services() {
  return (
    <div className="bg-white ">
       {/*  درست کردن خدمات جدید */}
      <div className="outline-blue-800 bg-white mt-20 text-5xl font-bold flex items-center justify-center">
        <p className="text-slate-950 bg-white text-5xl font-bold ">
          درست کردن خدمات جدید
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className=" relative group overflow-hidden mt-10 rounded-2xl bg-white shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex flex-col justify-center items-center">
          <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
            <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
              <div className="z-10 flex flex-col items-center gap-2">
                <span className="text-4xl font-bold">
                  <input
                    className="bg-[#fdfdfd] px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    name="text"
                    placeholder="تایتل"
                    type="text"
                  />
                </span>
                <p className="text-gray-200 text-sm">
                  <input
                    className="bg-[#fdfdfd] px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    name="text"
                    placeholder="توضیحات"
                    type="text"
                  />
                </p>
                <>

                  <div className="mt-4 flex items-center justify-center h-full">

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
                </>
              </div>
            </div>
          </div>
        </div>
      </div>


 {/* خدمات درست شده */}

      <div>
        <div className="outline-blue-800 bg-white mt-20 text-5xl font-bold flex items-center justify-center">
          <p className="text-slate-950 bg-white text-5xl font-bold ">
            خدمات درست شده
          </p>
        </div>

        <div className="container bg-white mx-auto text-center mt-10 mb-14" data-aos="fade-up">

          <div className="flex flex-wrap gap-8 justify-center items-center bg-white">
            {/* کارت خدمات */}
            <div className="relative group overflow-hidden rounded-2xl bg-white shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex flex-col justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-5xl font-bold">ارتودنسی</span>
                    <button
                      className="text-white bg-gradient-to-r mt-9 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* کارت آدرس */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-5xl font-bold">ایمپلنت
                    </span>
                    <button
                      className="text-white bg-gradient-to-r mt-9 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-5xl font-bold">درمان ریشه
                    </span>
                    <button
                      className="text-white bg-gradient-to-r mt-9 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-5xl font-bold">ترمیم دندان
                    </span>
                    <button
                      className="text-white bg-gradient-to-r mt-4 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-4xl font-bold">درمان های زیبایی</span>
                    <p className="text-gray-200 text-sm">(کامپوزیت،لمینت،بلیچینگ)
                    </p>
                    <button
                      className="text-white bg-gradient-to-r mt-3 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-4xl font-bold">جراحی های لثه</span>
                    <p className="text-gray-200 text-sm">(جراحی فلپ لثه،لیفت لثه،پیوند لثه و...)
                    </p>
                    <button
                      className="text-white bg-gradient-to-r mt-4 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-3xl font-bold">جراحی فک و صورت</span>
                    <p className="text-gray-200 text-sm">(کشیدن دندان نهفته٫دندان عقل،پیوند استخوان و...)
                    </p>
                    <button
                      className="text-white bg-gradient-to-r mt-4 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-4xl font-bold">دندانپزشکی کودکان</span>
                    <button
                      className="text-white bg-gradient-to-r mt-4 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="outline-blue-400 text-4xl font-bold">انواع پروتز های دندان</span>
                    <p className="text-gray-200 text-sm">(روکش،بریج،دست دندان،پارسیل و...)
                    </p>
                    <button
                      className="text-white bg-gradient-to-r mt-4 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      type="button"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default services;