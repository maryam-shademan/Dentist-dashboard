function reserv() {
  return (
    <div className="w-full mt-20 mb-20">
      <div className="flex items-center justify-center  ">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300 w-full max-w-4xl p-6">
          {/* موضوع سایت */}
          <form className="flex flex-col gap-6">
            <div className="relative py-6 text-center">
              <span className="font-extrabold text-2xl text-blue-600">مدیریت رزرو</span>
              <div className="absolute w-32 h-20 right-2 top-0 bg-blue-300 -z-10 rounded-full blur-xl" />
              <div className="absolute w-24 h-24 bg-blue-500 -z-10 rounded-full blur -top-6 -right-6" />
            </div>

            <>

              <>
                <div className="relative py-1 text-center">
                  <span className="font-extrabold text-1xl text-black"> روز</span>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64">
                    <div className="relative group rounded-lg bg-blue-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#93C5FD]">
                      <svg
                        y={0}
                        xmlns="http://www.w3.org/2000/svg"
                        x={0}
                        width={100}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                        height={100}
                        className="w-8 h-8 absolute right-0 -rotate-45 stroke-blue-300 top-1.5 group-hover:rotate-0 duration-300"
                      >
                        <path
                          strokeWidth={4}
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                          className="svg-stroke-primary"
                        />
                      </svg>
                      <select
                        multiple
                        className="appearance-none hover:placeholder-shown:bg-blue-500 relative text-blue-400 bg-transparent ring-0 outline-none border border-blue-500 text-neutral-900 placeholder-blue-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32"
                      >
                        <option>شنبه</option>
                        <option>یک‌شنبه</option>
                        <option>دوشنبه</option>
                        <option>سه‌شنبه</option>
                        <option>چهار شنبه</option>
                        <option>پنج شنبه</option>
                        <option>جمعه</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="relative py-1 text-center">
                  <span className="font-extrabold text-1xl text-black"> خدمات ها</span>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64">
                    <div className="relative group rounded-lg bg-blue-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#93C5FD]">
                      <svg
                        y={0}
                        xmlns="http://www.w3.org/2000/svg"
                        x={0}
                        width={100}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                        height={100}
                        className="w-8 h-8 absolute right-0 -rotate-45 stroke-blue-300 top-1.5 group-hover:rotate-0 duration-300"
                      >
                        <path
                          strokeWidth={4}
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                          className="svg-stroke-primary"
                        />
                      </svg>
                      <select
                        multiple
                        className="appearance-none hover:placeholder-shown:bg-blue-500 relative text-blue-400 bg-transparent ring-0 outline-none border border-blue-500 text-neutral-900 placeholder-blue-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32"
                      >

                        <option>ارتودنسی</option>
                        <option>جرم‌گیری</option>
                        <option>ترمیم دندان</option>


                        <option>ایمپلنت</option>
                        <option>بلیچینگ</option>
                        <option>عصب‌کشی</option>


                        <option>ونیر کامپوزیت</option>
                        <option>پروتز ثابت</option>
                        <option>جرم‌گیری</option>


                        <option>ترمیم دندان</option>
                        <option>ارتودنسی</option>
                        <option>ایمپلنت</option>


                        <option>بلیچینگ</option>
                        <option>عصب‌کشی</option>
                        <option>ونیر کامپوزیت</option>


                        <option>پروتز ثابت</option>
                        <option>ترمیم دندان</option>


                        <option>جرم‌گیری</option>
                        <option>ایمپلنت</option>
                        <option>بلیچینگ</option>

                      </select>
                    </div>
                  </div>
                </div>



              </>


            </>
            <div className="relative py-1 text-center">
                  <span className="font-extrabold text-1xl text-black">ساعت مراجعه</span>
                </div>
            <div className="flex justify-center">
              <div className="relative w-64">
                <div className="relative group rounded-lg bg-blue-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#93C5FD]">
                  <svg
                    y={0}
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    width={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height={100}
                    className="w-8 h-8 absolute right-0 -rotate-45 stroke-blue-300 top-1.5 group-hover:rotate-0 duration-300"
                  >
                    <path
                      strokeWidth={4}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="none"
                      d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                      className="svg-stroke-primary"
                    />
                  </svg>
                  <select
                    multiple
                    className="appearance-none hover:placeholder-shown:bg-blue-500 relative text-blue-400 bg-transparent ring-0 outline-none border border-blue-500 text-neutral-900 placeholder-blue-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32"
                  >
                    {[...Array(16)].map((_, i) => {
                      const startHour = 7 + i;
                      const endHour = startHour + 1;
                      return (
                        <option key={i}>
                          {startHour}-{endHour}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="relative py-1 text-center">
                  <span className="font-extrabold text-1xl text-black"> تاریخ هرماه</span>
                </div>
            <div className="flex justify-center">
              <div className="relative w-64">
                <div className="relative group rounded-lg bg-blue-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#93C5FD]">
                  <svg
                    y={0}
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    width={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height={100}
                    className="w-8 h-8 absolute right-0 -rotate-45 stroke-blue-300 top-1.5 group-hover:rotate-0 duration-300"
                  >
                    <path
                      strokeWidth={4}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="none"
                      d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                      className="svg-stroke-primary"
                    />
                  </svg>
                  <select
                    multiple
                    className="appearance-none hover:placeholder-shown:bg-blue-500 relative text-blue-400 bg-transparent ring-0 outline-none border border-blue-500 text-neutral-900 placeholder-blue-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32"
                  >
                    {[...Array(30)].map((_, i) => {
                      return (
                        <option key={i}>{i + 1}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>



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







      <div className="bg-white overflow-auto mt-10">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">نام</th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">فامیلی</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">تلفن</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">روز</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ساعت</th>
              <th className="text-left py-3 px-12 uppercase font-semibold text-sm">حذف</th>
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
                <a className="" >شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >14-16</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">محمد</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >یک شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >12-14</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">علی</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >دوشنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="0" >10-12</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">مرتضی </td>
              <td className="w-1/3 text-left py-3 px-4">هاشمی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >سه شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >8-10</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">محمد</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >یک شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >12-14</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">علی</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >دوشنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >10-12</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">مرتضی </td>
              <td className="w-1/3 text-left py-3 px-4">هاشمی</td>
              <td className="text-left py-3 px-4">
                <a className="" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >سه شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >8-10</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">محمد</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >یک شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >12-14</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">علی</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >دوشنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >10-12</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">مرتضی </td>
              <td className="w-1/3 text-left py-3 px-4">هاشمی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >سه شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >8-10</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">محمد</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >یک شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >12-14</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">علی</td>
              <td className="w-1/3 text-left py-3 px-4">احمدی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >دوشنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >10-12</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">مرتضی </td>
              <td className="w-1/3 text-left py-3 px-4">هاشمی</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >سه شنبه</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="" >8-10</a>
              </td>
              <td className="text-left py-3 px-4">
                <>
                  <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      حذف
                    </svg>
                  </button>
                </>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>


  );
}

export default reserv;