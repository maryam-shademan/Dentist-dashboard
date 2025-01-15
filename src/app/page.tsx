export default function Home() {
  return (

    <>

      <section>

        <div className="bg-gray-800  mt-12 ">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2 ">پنل ادمین</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center bg-white">
          {/* Metric Cards */}
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div className="flex items-center">
                <div className="rounded-full p-5 bg-green-600">
                  <i className="fa fa-wallet fa-2x text-white" />
                </div>
                <div className="ml-4 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    تعدادکاربران
                  </h2>
                  <p className="font-bold text-3xl text-slate-500">
                    3249{" "}
                    <span className="text-green-500">
                      
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
              <div className="flex items-center">
                <div className="rounded-full p-5 bg-pink-600">
                  <i className="fas fa-users fa-2x text-white" />
                </div>
                <div className="ml-4 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">مقدار درامد</h2>
                  <p className="font-bold text-3xl text-slate-500">
                    $249{" "}
                    <span className="text-pink-500">
                      <i className="fas fa-exchange-alt" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
              <div className="flex items-center">
                <div className="rounded-full p-5 bg-yellow-600">
                  <i className="fas fa-user-plus fa-2x text-white" />
                </div>
                <div className="ml-4 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">تعداد رزرو ها</h2>
                  <p className="font-bold text-3xl text-slate-500">
                    2{" "}
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
              <div className="flex items-center">
                <div className="rounded-full p-5 bg-blue-600">
                  <i className="fas fa-server fa-2x text-white" />
                </div>
                <div className="ml-4 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                  زمان فعالیت سرور
                  </h2>
                  <p className="font-bold text-2xl text-slate-500">20 روز</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
              <div className="flex items-center">
                <div className="rounded-full p-5 bg-indigo-600">
                  <i className="fas fa-tasks fa-2x text-white" />
                </div>
                <div className="ml-4 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">تعداد وبلاگ های گذاشته شده</h2>
                  <p className="font-bold text-3xl text-gray-600">10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
              <div className="flex items-center">
                <div className="rounded-full p-5 bg-red-600">
                  <i className="fas fa-inbox fa-2x text-white" />
                </div>
                <div className="ml-4 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">پیام های ثبت شده</h2>
                  <p className="font-bold text-3xl text-gray-600">
                    3{" "}
                    <span className="text-red-500">
                      <i className="fas fa-caret-up" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Table Card */}
        <div className="flex justify-center items-center bg-gray-100 ms:mb-4 mb-20">
          <div className="w-full md:w-1/2 xl:w-2/3 p-6">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-t-lg p-2">
                <h2 className="font-bold uppercase text-gray-600">جدول</h2>
              </div>
              <div className="p-5">
                <h1 className="text-3xl text-black pb-6">ثبت نامی ها</h1>

                
                <div className="w-full mt-6">

                  <div className="bg-white overflow-auto">
                    <table className="min-w-full bg-white">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">نام</th>
                          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">فامیلی</th>
                          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">تلفن</th>
                          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ایمیل</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="w-1/3 text-left py-3 px-4">امبر</td>
                          <td className="w-1/3 text-left py-3 px-4">حسین</td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
                          </td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="w-1/3 text-left py-3 px-4">Emma</td>
                          <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
                          </td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 text-left py-3 px-4">علی</td>
                          <td className="w-1/3 text-left py-3 px-4">احمدی</td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
                          </td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="w-1/3 text-left py-3 px-4">مرتضی </td>
                          <td className="w-1/3 text-left py-3 px-4">هاشمی</td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
                          </td>
                          <td className="text-left py-3 px-4">
                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}
