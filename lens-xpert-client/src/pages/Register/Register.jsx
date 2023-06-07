import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    // Getting the exact path;
    let from = location.state?.from?.pathname || "/";

    const handleRegisterSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;

        // Validation;
        if (password.length < 6) {
            setError('Password Must be 6 character long..')
            return
        }
        else if (password != confirmpassword) {
            setError('Password does not match..')
            return
        }
        else {
            setError('')
        }

        // Uploading the image;
        const image = form.elements.image.files[0];
        const formData = new FormData();
        formData.append('file', image);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    fetch(`${import.meta.env.VITE_CLOUDINARY_API_KEY}`,
                        {
                            method: 'POST',
                            body: formData,
                        }
                    )
                        .then(res => res.json())
                        .then(data => {
                            if (data.asset_id) {
                                const photoURL = data.url;
                                updateUser(user, name, photoURL)
                                    .then(() => {
                                        // Profile updated!
                                        navigate(from, { replace: true })
                                    }).catch((error) => {
                                        // An error occurred
                                        // ...
                                        console.log(error)
                                    });
                            }
                        })

                }
            })
            .catch((error) => {
                // An error occurred
                // ...
                const regerror = error.message;
                if (regerror == 'Firebase: Error (auth/email-already-in-use).') {
                    const newErrormsg = 'Email already in use'
                    setError(newErrormsg)
                }
            });

    }
    return (
        <div>
            <Helmet>
                <title>Register | LensXpert</title>
            </Helmet>
            <form onSubmit={handleRegisterSubmit}>
                <h3 className="text-center font-semibold text-3xl py-5">Welcome to LensXpert, Create your Account..</h3>
                <hr />
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className=" max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <p className="font-semibold text-red-600">{error && <>{error}</>}</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="displayName" placeholder="Enter your name" className="input input-bordered w-80" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered w-80" required={true} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <div className="form-control w-full max-w-xs">
                                        <input type="file" name="image" accept="image/*" className="file-input file-input-bordered w-full max-w-xs" required={true} />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" required={true} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="text" name="confirmpassword" placeholder="password" className="input input-bordered" required={true} />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
