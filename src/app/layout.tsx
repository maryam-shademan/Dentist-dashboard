import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";
import Head from "next/head";


const geistSans = localFont({
  src: "../app/fonts - Copy/lazlo.woff2",
});

export const metadata: Metadata = {
  title: "پنل ادمین",
  description: " پنل مدیریت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link
            href="https://afeld.github.io/emoji-css/emoji.css"
            rel="stylesheet"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"
            integrity="sha256-xKeoJ50pzbUGkpQxDYHD7o7hxe0LaOGeguUidbq6vis="
            crossOrigin="anonymous"
            async
          ></script>
        </Head>
        <div>
          <h1>Next.js Example</h1>
        </div>
      </head>
      <body
        className={`${geistSans.className} antialiased overflow-x-hidden`}
      >
        <div className="flex flex-col md:flex-row min-h-screen">
          <nav aria-label="alternative nav" className="bg-gray-800 shadow-xl md:h-screen w-full md:w-48 fixed md:relative bottom-0 md:bottom-auto z-10">
            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
              <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600"
                  >
                    <i className="fas fa-tasks pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      کنترل یوزر
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                  >
                    <i className="fas fa-tasks pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        پیام ها
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                  >
                    <i className="fas fa-tasks pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        رزرویی ها
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                  >
                    <i className="fa fa-envelope pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      گذاشتن وبلاگ
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600"
                  >
                    <i className="fa fa-envelope pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      تنظیمات سایت
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                  >
                    <i className="fa fa-wallet pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                       عکس گذاری
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800  hover:border-pink-500"
                  >
                    <i className="fa fa-envelope pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      اطلاعات تماس
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                  >
                    <i className="fa fa-envelope pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      تنطیمات خدمات
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                  >
                    <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                      صفحه اصلی
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="#"
                    className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                  >
                    <i className="fa fa-wallet pr-0 md:pr-3" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                      خروج
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex-1 flex flex-col">
            <header>
              <nav
                aria-label="menu nav"
                className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
              >
                <div className="flex ">


                  <div className="flex w-full  content-center  md:w-0 md:justify-end">
                    <ul className="list-reset  flex-1 md:flex-none items-center">

                      <li className="flex-1 md:flex-none ">
                        <div className="relative inline-block">
                          <button className="drop-button text-white py-2 px-2">
                            <span className="pr-2">
                              <img src="/img/مصاحبه.jpg" alt="Icon" className="h-6 w-6 inline" />
                            </span>
                           سلام علیکم, حیدری
                            <svg
                              className="h-3 fill-current inline"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </button>

                          <div
                            id="myDropdown"
                            className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                          >
                            <input
                              type="text"
                              className="drop-search p-2 text-gray-600"
                              placeholder="Search.."
                              id="myInput"
                            />
                            <a
                              href="#"
                              className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                            >
                              <i className="fa fa-user fa-fw" /> Profile
                            </a>
                            <a
                              href="#"
                              className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                            >
                              <i className="fa fa-cog fa-fw" /> Settings
                            </a>
                            <div className="border border-gray-800" />
                            <a
                              href="#"
                              className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                            >
                              <i className="fas fa-sign-out-alt fa-fw" /> Log Out
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            <main className="flex-1 p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}