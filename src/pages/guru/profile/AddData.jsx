import React from "react";
import Footer from "../../../components/footer/Footer";

function AddData() {
  return (
    <div className="scroll-smooth ">
      <div className="relative w-full border-b shadow-md">
        <Header />
      </div>
      <div className="bg-slate-200 justify-center py-10 flex w-full h-96">
        <div className="w-1/3 rounded-md shadow-md p-10 bg-white">
          <form action="" className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="nip"
                className="text-base text-slate-500 font-medium"
              >
                NIP
              </label>
              <input
                type="text"
                className="rounded-md shadow-md p-2 border outline-none border-sky-500 hover:ring hover:ring-sky-200 transition duration-150 hover:border-none text-base text-slate-500 font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="nama"
                className="text-base text-slate-500 font-medium"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                className="rounded-md shadow-md p-2 border outline-none border-sky-500 hover:ring hover:ring-sky-200 transition duration-150 hover:border-none text-base text-slate-500 font-bold"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
              <div className="flex flex-row gap-x-5">
                <div
                  role="button"
                  className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="horizontal-list-react"
                    className="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div className="grid mr-3 place-items-center">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="horizontal-list-react"
                        >
                          <input
                            name="horizontal-list"
                            id="horizontal-list-react"
                            type="radio"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-sky-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sky-500 checked:before:bg-sky-500 hover:before:opacity-0"
                          />
                          <span className="absolute text-sky-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                dataName="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                      React.js
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="container py-2 ">
      <ul className="flex justify-between md:gap-56">
        <li className="flex items-center">
          <img
            src="https://seeklogo.com/images/D/Departemen_Pendidikan_Nasional-logo-E2BD667284-seeklogo.com.png"
            alt="logo"
            className="w-14"
          />
        </li>
        <li className="flex items-center justify-between gap-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          <button
            type="button"
            id="profile"
            className="flex items-center gap-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {/* <div className="flex items-center justify-center">
                        <div className="flex items-start justify-center w-8 h-8 overflow-hidden border rounded-full shadow-md border-slate-500">
                            <img src="<?= base_url('assets/img/profile/guru/' . guru()->image_profile); ?>" alt="" className="w-8">
                        </div>
                    </div> */}

            {/* <h5 className="hidden text-sm text-slate-500 md:block">Guru</h5> */}

            <h5 className="hidden text-sm text-slate-500 md:block">Siswa</h5>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AddData;
