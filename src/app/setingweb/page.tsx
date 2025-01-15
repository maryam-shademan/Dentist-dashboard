function setingweb() {
  return ( 
<section className="mt-20  sm:grid-cols-2 ">
  <div className="flex items-center justify-center">
    <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-full sm:w-96 lg:w-[500px] h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
      <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
        <span className="font-extrabold text-1xl text-blue-600">
          توضیحات سایت
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

  <div className="flex items-center justify-center mt-10">
    <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-full sm:w-96 lg:w-[500px] h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
      <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-blue-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-500 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
        <span className="font-extrabold text-1xl text-blue-600">
          موضوع سایت
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
  <>

  <div className="max-w-3xl mx-auto mt-10 rounded-lg overflow-hidden md:max-w-4xl">
  <div className="md:flex justify-center">
    <div className="w-full md:w-2/3 p-3">
      <div className="relative h-64 md:h-48 rounded-lg border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="absolute flex flex-col items-center">
          <svg fill="#0a54ff" width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" stroke="#0a54ff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M6.97,30.75H25.03c.41,0,.75-.34,.75-.75V3.89c0-.41-.34-.75-.75-.75h-2.56v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-2.56c-.41,0-.75,.34-.75,.75V30c0,.41,.34,.75,.75,.75Zm.75-26.11h1.81v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h1.81V29.25H7.72V4.64Z"></path>
              <path d="M16.86,9.66h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
              <path d="M16.86,16.19h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
              <path d="M16.86,22.73h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
              <path d="M10.28,14.27h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75Z"></path>
              <path d="M10.28,21h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75Z"></path>
              <path d="M13.89,25.79h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
            </g>
          </svg>
          <span className="block text-gray-500 font-semibold">
            فایل &amp; وعکس انتخاب کن
          </span>
          <span className="block text-gray-400 font-normal mt-1">
            کلیک کنید وفیل راانتخاب کنید
          </span>
        </div>
        <input
          name=""
          className="h-full w-full opacity-0 cursor-pointer"
          type="file"
        />
      </div>
      
      <div className="flex justify-center mt-6">
        <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group flex items-center justify-center">
          <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0,0,10px,10px_rgba(0,0,0,0.3)]" />
          <span className="relative z-10">ثبت</span>
        </button>
      </div>
    </div>
  </div>
</div>

</>

</section>


   );
}

export default setingweb;