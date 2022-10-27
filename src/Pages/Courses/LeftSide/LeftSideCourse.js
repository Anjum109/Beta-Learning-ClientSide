import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSideCourse = () => {
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCoursesList(data));
    }, [])

    return (
        <div className='mt-5'>
            <h2 className='button-29'>Course List</h2>
            <div className='mt-5'>
                {
                    coursesList.map(category => <p
                        key={category.id}

                    >
                        <Link className='button-29' to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideCourse;