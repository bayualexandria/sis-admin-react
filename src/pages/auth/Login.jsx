import Cookies from "js-cookie";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [user, setuser] = useState(false);
  const data = { username, password };

  const onHandlerSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      let response = await fetch("http://127.0.0.1:8000/api/auth/login-admin", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      console.log(response);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (response.status === 401) {
          setMessage(response.message);
          setTimeout(() => {
            return setMessage("");
          }, 8000);
        }
        if (response.status === 403) {
          setError(response.message);
          setTimeout(() => {
            return setError("");
          }, 8000);
        }

        if (response.status === 200) {
          var date = new Date();
          date.setTime(date.getTime() + 60 * 60 * 1000);
          Cookies.set(
            "authentication",
            [response.accessToken, username],
            // {
            //   expires: date,
            // }
          );
          setuser(username);
        }
        // console.log(response);
        return response;
      }, 5000);
    } catch (e) {
      setLoading(false);
      if (e.message === "Failed to fetch") {
        console.log(e);
        setError(
          "Koneksi ke server terputus! Mohon hubungi pihak administrator server."
        );
        setTimeout(() => {
          return setError("");
        }, 8000);
      }
    }
  };
  const showPassword = () => {
    setShow(!show);
  };

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      
      <div className="h-screen scroll-smooth bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-xl text-white font-bold text-center">
            LOGIN <br /> Sistem Informasi Siswa
          </h1>

          <div className="px-5 w-full md:w-1/3 my-5">
            <div className="rounded-md shadow-md px-7 pb-10 bg-white">
              <div className="w-full flex justify-center py-5">
                <img
                  src="https://seeklogo.com/images/D/Departemen_Pendidikan_Nasional-logo-E2BD667284-seeklogo.com.png"
                  alt="logo"
                  className="w-1/5"
                />
              </div>
              {error ? (
                <div className="py-2 flex justify-center items-center rounded-md shadow-md bg-slate-100 px-2 mb-3 text-center">
                  <p className="text-sm font-bold text-rose-400 animate-pulse">
                    {error}
                  </p>
                </div>
              ) : (
                ""
              )}
              <form
                onSubmit={onHandlerSubmit}
                className="flex flex-col gap-y-6"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-base text-slate-500 font-bold"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className={`${
                      message.username ? "border-rose-500" : "border-sky-500"
                    } border  rounded-md shadow-md p-2 text-sm outline-none`}
                  />
                  <div className="pt-1">
                    {message.username ? (
                      <p className="text-red-500 text-xs">
                        {message.username}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex relative flex-col">
                  <label
                    htmlFor="password"
                    className="text-base text-slate-500 font-bold"
                  >
                    Password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${
                      message.password ? "border-rose-500" : "border-sky-500"
                    } border  rounded-md shadow-md p-2 text-base outline-none`}
                  />
                  <div
                    onClick={showPassword}
                    className="absolute px-2 bg-white outline-none cursor-pointer right-1 top-8"
                  >
                    {show ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          message.password ? "text-rose-500" : "text-cyan-500"
                        } w-6 h-6 `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          message.password ? "text-rose-500" : "text-cyan-500"
                        } w-6 h-6 `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="pt-1">
                    {message.password ? (
                      <p className="text-red-500 text-xs">
                        {message.password}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <button
                  className="text-base font-bold text-white rounded-full bg-sky-500 py-2 shadow-md hover:bg-white hover:text-sky-500 transition duration-200 border-sky-500 border cursor-pointer outline-none"
                  type="submit"
                >
                  {loading ? (
                    <div className="flex flex-row items-center justify-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 animate-spin"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
