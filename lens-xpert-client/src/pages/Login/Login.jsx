import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIMG from "../../assets/images/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const location = useLocation()

    // Getting the exact path;
    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInUser(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                // console.log(errorMsg)
                if (errorMsg == 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Useremail or Password')

                }
                else {
                    setError('')
                }
            })
    };

    return (
        <div>
            <Helmet>
                <title>Login | LensXpert</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center font-semibold text-3xl py-5">Welcome to LensXpert, Please Login..</h3>
                <hr />
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className=" max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <p className="font-semibold text-red-600">{error && <>{error}</>}</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email")} className="input input-bordered w-80" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="p-2">
                                    <h3 className="mb-5">Don't have any account? <Link to="/register" className="text-blue-500">Register Now</Link></h3>
                                    <div className=" flex justify-center items-center gap-3 border-2 p-2 text-center mt-2">
                                        <img src={GoogleIMG} width={25} alt="" />   Signin with Google
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
