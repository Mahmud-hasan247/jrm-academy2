import React from 'react';
import './Course.css';

const Course = (props) => {
    const { title, price, details } = props.course;
    return (
        <div className="course">
            <div class="card-deck container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{details}</p>
                    </div>
                    <div>
                    <button class="btn btn-primary" onClick={() => props.addCourse(props.course)}>Enroll Now</button>
                    </div>
                    <br/>
                    <div class="card-footer">
                        <h4 class="text-muted">BDT: {price}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Course;