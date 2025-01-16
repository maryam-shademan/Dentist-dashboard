function setingweb() {
  return (
    <section className="mt-20  sm:grid-cols-2 ">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300 w-full max-w-4xl p-6">
          {/* موضوع سایت */}
          <form className="flex flex-col gap-6">
            <div className="relative py-6 text-center">
              <span className="font-extrabold text-2xl text-blue-600">موضوع سایت</span>
              <div className="absolute w-32 h-20 right-2 top-0 bg-blue-300 -z-10 rounded-full blur-xl" />
              <div className="absolute w-24 h-24 bg-blue-500 -z-10 rounded-full blur -top-6 -right-6" />
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 overflow-hidden rounded-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5"
                  placeholder="موضوع..."
                />
                <div className="absolute w-12 h-12 right-0 bg-blue-500 rounded-full blur-lg" />
                <div className="absolute w-20 h-20 bg-blue-300 top-3 right-12 rounded-full blur-lg" />
              </div>
            </div>

            {/* توضیح سایت */}
            <div className="relative py-6 text-center">
              <span className="font-extrabold text-2xl text-blue-600">توضیحات سایت</span>
              <div className="absolute w-32 h-20 right-2 top-0 bg-blue-300 -z-10 rounded-full blur-xl" />
              <div className="absolute w-24 h-24 bg-blue-500 -z-10 rounded-full blur -top-6 -right-6" />
            </div>


            <div className="flex justify-center">
              <div className="relative w-64 overflow-hidden rounded-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5"
                  placeholder="توضیح..."
                />
                <div className="absolute w-12 h-12 right-0 bg-blue-500 rounded-full blur-lg" />
                <div className="absolute w-20 h-20 bg-blue-300 top-3 right-12 rounded-full blur-lg" />
              </div>
            </div>


            {/* آپلود فایل */}
            <div className="relative flex justify-center mt-6">
              <div className="relative h-64 w-full md:w-2/3 rounded-lg border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="absolute flex flex-col items-center">
                  <svg
                    fill="#0a54ff"
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    stroke="#0a54ff"
                  >
                    <path d="M6.97,30.75H25.03c.41,0,.75-.34,.75-.75V3.89c0-.41-.34-.75-.75-.75h-2.56v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-2.56c-.41,0-.75,.34-.75,.75V30c0,.41,.34,.75,.75,.75Zm.75-26.11h1.81v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h1.81V29.25H7.72V4.64Z"></path>
                    <path d="M16.86,9.66h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
                  </svg>
                  <span className="block text-gray-500 font-semibold">
                    فایل &amp; عکس انتخاب کن
                  </span>
                  <span className="block text-gray-400 font-normal mt-1">
                    کلیک کنید و فایل را انتخاب کنید
                  </span>
                </div>
                <input
                  className="h-full w-full opacity-0 cursor-pointer"
                  type="file"
                />
              </div>
            </div>

            {/* دکمه ثبت */}
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
          </form>
        </div>
      </div>



    </section>


  );
}

export default setingweb;