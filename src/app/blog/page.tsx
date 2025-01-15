function blog() {
  return (
    <>

      <div className="max-w-md mx-auto relative overflow-hidden mt-36 z-10 bg-gray-100 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-sky-800 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ساخت وبلاگ</h2>
        <form method="post" action="#">
          <div className="mb-4">
            <label className="text-sm text-gray-900 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              انتخاب عکس
            </label>
            <input
              className="flex w-full rounded-md border border-blue-300 border-input bg-gray-200 text-sm text-gray-900 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
              type="file"
              id="انتخاب عکس"
            />
            <label
              className="block text-sm mt-3 font-medium text-gray-900"
              htmlFor="name"
            >
              تایتل
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-200 border border-gray-600 rounded-md text-gray-900"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              یوآرال
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-200 border border-gray-600 rounded-md text-gray-900"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="bio"
            >
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
          <div className="flex justify-center">
            <>

              <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-md group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-500 rounded-md group-hover:translate-x-0" />
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  انتشار وبلاگ
                </span>
              </button>
            </>

          </div>
        </form>
      </div>
    </>

  );
}

export default blog;