import React, { useState } from 'react';
import data from '../../data/data.json';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [courses, setCourse] = useState(data);
    
    const [cart, setCart] = useState([]);
    const addCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div>
            <div >
                {
                    courses.map(course => <Course course={course} addCourse={addCourse} key={course.title}></Course> )
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;