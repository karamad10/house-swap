import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "../../components/Link";
import { Layout } from "../../components/account";
import { userService, alertService } from "../../services";

export default Login;

function Login() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <>
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
          defer
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

        <style>
          @import
          url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
        </style>

        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            height: "100vh",
            width: "100vw",
          }}
          className="min-w-screen min-h-screen bg-gray-300 flex items-center justify-center px-5 py-5"
        >
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
              <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                <svg
                  width="450"
                  height="450"
                  viewBox="0 0 200 200"
                  className="house"
                >
                  <g>
                    <circle fill="#F4F4F9" cx="150" cy="15" r="30" />
                    <circle fill="#B8DBD9" cx="140" cy="60" r="20" />
                    <circle fill="#a1a1a1" cx="120" cy="80" r="10" />
                    <rect
                      fill="#8C5E58"
                      width="20"
                      height="50"
                      x="110"
                      y="90"
                    />
                    <polygon fill="#6B6570" points="100,100 150,150 50,150" />
                    <rect
                      fill="#2CEAA3"
                      width="200"
                      height="10"
                      x="0"
                      y="190"
                    />
                    <rect
                      fill="#8C5E58"
                      width="80"
                      height="50"
                      x="60"
                      y="150"
                    />
                    <rect
                      fill="#0D1F22"
                      width="20"
                      height="30"
                      x="100"
                      y="170"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                    <p>Enter your information to login</p>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                          name="email"
                          type="email"
                          {...register("email")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                          name="password"
                          type="password"
                          {...register("password")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        disabled={formState.isSubmitting}
                        className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        Login
                      </button>
                      <div
                        style={{
                          margin: "auto",
                          width: "28%",
                          paddingTop: "10px",
                        }}
                      >
                        <span>
                          No Account ?{" "}
                          <a
                            style={{
                              color: "rgba(67, 56, 202)",
                            }}
                            href="/account/register"
                          >
                            Register
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
