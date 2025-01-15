function contact() {
  return (
    <>
      <section className="mt-20 grid grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-1xl text-blue-600">
                تغیر شماره تماس وبسایت
              </span>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5 checked:bg-blue-500"
                  placeholder="تلفن..."
                />
              </div>
              <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
                <span className="relative z-10">ثبت</span>
              </button>

            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-1xl text-blue-600">
                تغیر ایمیل وبسایت
              </span>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5 checked:bg-blue-500"
                  placeholder="ایمیل..."
                />
              </div>
              <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
                <span className="relative z-10">ثبت</span>
              </button>

            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-1xl text-blue-600">
                تغییر آدرس
              </span>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5 checked:bg-blue-500"
                  placeholder="آدرس..."
                />
              </div>
              <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
                <span className="relative z-10">ثبت</span>
              </button>

            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-1xl text-blue-600">
                تغییر شماره تلگرام وبسایت
              </span>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5 checked:bg-blue-500"
                  placeholder="تلگرام..."
                />
              </div>
              <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
                <span className="relative z-10">ثبت</span>
              </button>

            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-1xl text-blue-600">
                تغییر اینستاگرام وبسایت
              </span>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5 checked:bg-blue-500"
                  placeholder="اینستاگرام..."
                />
              </div>
              <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
                <span className="relative z-10">ثبت</span>
              </button>

            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-1xl text-blue-600">
                تغییر شماره واتساپ وبسایت
              </span>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  type="text"
                  className="relative bg-transparent ring-0 outline-none border border-blue-400 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-400 placeholder-opacity-60 focus:border-blue-400 block w-full p-2.5 checked:bg-blue-500"
                  placeholder="واتساپ..."
                />
              </div>
              <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
                <span className="relative z-10">ثبت</span>
              </button>

            </div>
          </form>
        </div>
      </section>


    </>

  );
}

export default contact;