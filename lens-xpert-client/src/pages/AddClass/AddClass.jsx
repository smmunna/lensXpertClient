import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { DarkModeContext } from '../../contexts/DarkMode';
import './AddClass.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)

    const handleaddClass = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const status = 'pending';

        // Uploading the image;
        const image = form.elements.image.files[0];
        const formData = new FormData();
        formData.append('file', image);
        fetch(`${import.meta.env.VITE_CLOUDINARY_API_KEY}`,
            {
                method: 'POST',
                body: formData,
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.asset_id) {
                    const image = data.url;
                    const classes = { name, image, instructorName, instructorEmail, availableSeats, price, status }
                    axios.post(`${import.meta.env.VITE_SERVER_API}/classes/addclass`, classes)
                        .then(res => {
                            if (res.statusText == 'OK') {
                                form.reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Item is added, wait for approval..',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            })
    }

    return (
        <div>
            <h3 className='text-center text-2xl font-semibold py-4'>Add a new Class</h3>
            <hr />
            <div className={`px-8 flex justify-center`}>
                <form onSubmit={handleaddClass}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-80" required />
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
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name="instructorName" defaultValue={user?.displayName} readOnly className="input input-bordered w-80" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" name="instructorEmail" defaultValue={user.email} readOnly className="input input-bordered w-80" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" name="availableSeats" placeholder="Seats" className="input input-bordered w-80" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-80" required />
                    </div>
                    <button className='btn btn-primary mt-4'>Add Class</button>
                </form>
            </div>
        </div>
    );
}

export default AddClass;
