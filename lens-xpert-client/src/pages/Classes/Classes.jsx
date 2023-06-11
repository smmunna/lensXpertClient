import React, { useContext, useEffect, useState } from 'react';
import Cover from '../../components/Cover/Cover';
import imgCover from "../../assets/images/slider1.jpg";
import ClassesCard from './ClassesCard';
import { DarkModeContext } from '../../contexts/DarkMode';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const Classes = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [loading, setLoading] = useState(true)

    const [allClass, setallClass] = useState([])



    const [currentpage, setCurrentpage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const numofProducts = useLoaderData()
    const numberofProductinDb = numofProducts.totalProducts;

    const totalPages = Math.ceil(numberofProductinDb / itemsPerPage)

    const pageNumbers = [...Array(totalPages).keys()]

    // Dropdown options
    const options = [5, 10, 20]
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value))
        setCurrentpage(0)
    }


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentpage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setallClass(data))
    }, [currentpage, itemsPerPage])





    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/classes`)
            .then(res => {
                setallClass(res.data)
                setLoading(false)
            })
    }, [])

    const handleFormSearchSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value;

        axios.get(`${import.meta.env.VITE_SERVER_API}/search?name=${search}`)
            .then(res => {
                setallClass(res.data)
                setLoading(false)
            })
    }



    return (
        <div>
            <Helmet>
                <title>All Classes | LensXpert</title>
            </Helmet>
            <Cover title={`All Photography Classes`} img={imgCover} />
            {
                loading && <div className='mt-24 text-center text-red-500 text-4xl'><span className="loading loading-bars loading-lg"></span></div>
            }

            <div className={`px-12 py-4 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                <form onSubmit={handleFormSearchSubmit}>
                    <input type="text" placeholder="Search by Name" name='search' className="input input-bordered w-full max-w-xs mr-2" /><button className='btn btn-secondary mt-2 md:mt-0'>Search</button>
                </form>
            </div>

            <div className={`px-2 md:px-12 py-8 pt-5 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allClass.map(classes => <ClassesCard
                            key={classes._id}
                            classes={classes}
                            darkMode={darkMode}
                        />)
                    }
                </div>
            </div>


            <div style={{ padding: '30px 0px', textAlign: 'center' }} className={`${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                {
                    pageNumbers.map(number => <button
                        style={{ marginRight: '12px' }}
                        className={currentpage == number ? 'join-item btn btn-md btn-active' : 'join-item btn btn-md'}
                        key={number}
                        onClick={() => setCurrentpage(number)}
                    >{number + 1}</button>)
                }

                {/* Options value */}
                <select className="select select-bordered text-black" value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>

            </div>


        </div>
    );
}

export default Classes;
