import React from "react";
import "../styles/coursepage.scss";
import Course from "../comps/Course";
import Navbar from "../comps/Navbar";
const Courses: React.FC = () => {
  return (
    <div className="coursepage flex w-full h-full">
        <Navbar home={false} />
        
      <h3>Courses We Offer</h3>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div className="courses flex w-full">
        <Course
          title=" Cabin Crew Training"
          image="https://images.pexels.com/photos/3119983/pexels-photo-3119983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Course
          title="Ground Staff Training"
          image="https://images.pexels.com/photos/3069147/pexels-photo-3069147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Course
          title="Customer Support Training"
          image="https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
         <Course
          title=" Cabin Crew Training"
          image="https://images.pexels.com/photos/3119983/pexels-photo-3119983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Course
          title="Ground Staff Training"
          image="https://images.pexels.com/photos/3069147/pexels-photo-3069147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Course
          title="Customer Support Training"
          image="https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
         <Course
          title=" Cabin Crew Training"
          image="https://images.pexels.com/photos/3119983/pexels-photo-3119983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Course
          title="Ground Staff Training"
          image="https://images.pexels.com/photos/3069147/pexels-photo-3069147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Course
          title="Customer Support Training"
          image="https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default Courses;
