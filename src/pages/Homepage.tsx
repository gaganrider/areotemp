import React, { useEffect, useState } from "react";
import "../styles/homepage.scss";
import AirplayIcon from "@mui/icons-material/Airplay";
import Course from "../comps/Course";
import Testimonial from "../comps/Testimonial";
import TungstenIcon from "@mui/icons-material/Tungsten";
import Navbar from "../comps/Navbar";
import FlightIcon from "@mui/icons-material/Flight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Homepage: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const testarry = [
    {
      name: "suresh",
      img: "https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "ramesh",
      img: "https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "mahesh",
      img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "mukesh",
      img: "https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "kalesh",
      img: "https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "mithlesh",
      img: "https://images.pexels.com/photos/2853507/pexels-photo-2853507.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "roadrash",
      img: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "cash",
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "mahesh",
      img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "mukesh",
      img: "https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "kalesh",
      img: "https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "mithlesh",
      img: "https://images.pexels.com/photos/2853507/pexels-photo-2853507.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const lerp = (start, end, t) => {
    return start + (end - start) * t;
  };

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.pageX, y: e.pageY });
    };

    const updateCursorPosition = () => {
      const lerpSpeed = 0.2; // Change this value to adjust the lerping speed
      setCursorPosition((prevPosition) => ({
        x: lerp(prevPosition.x, targetPosition.x - 5, lerpSpeed),
        y: lerp(prevPosition.y, targetPosition.y - 5, lerpSpeed),
      }));

      // Continue updating position
      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };

    // Start the lerping animation loop
    updateCursorPosition();

    // Set up mousemove listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [targetPosition]);

  return (
    <div className="homepage w-full h-full">
      <FlightIcon
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x - 15}px`,
          top: `${cursorPosition.y - 15}px`,
        }}
      />

      <Navbar home={true} />
      <section className="hero w-full h-full">
        <h2>
          Welcome to <br /> AeroMingle Acadmy{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sunt
          voluptate eveniet omnis amet?
          <div className="form flex">
            <span>
              <p>For further information or assistance</p>
              <input type="text" placeholder="Email or Phone" />
            </span>
            <button>Let's Connect</button>
          </div>
        </p>
      </section>
      <section id="about" className="aboutus flex w-full h-full">
        <article className="section1">
          <h2>About Us</h2>
          <p>
            At Aero Mingle Academy, we are committed to providing top-quality
            training for aspiring aviation professionals. Our programs focus on
            equipping students with the practical skills and knowledge necessary
            to excel in ground staff and cabin crew roles, ensuring their
            success in the dynamic aviation industry.
          </p>
          <p>
            Join us at Aero Mingle Academy and start your journey toward a
            fulfilling career in aviation. With our commitment to excellence,
            you'll be well-prepared to thrive in this exciting industry.
          </p>
        </article>
        <figure className="section2">
          <img
            // src="https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="https://images.pexels.com/photos/3760564/pexels-photo-3760564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Collaborative learning environment"
          />
        </figure>
        <figure className="section3">
          <p>
            Our academy's training course spans over 4 months, providing a
            comprehensive curriculum designed to cover a wide range of topics.
            Throughout this period, students gain in-depth knowledge and
            practical skills essential for their roles in aviation. Our program
            ensures a well-rounded foundation to help students succeed in the
            industry.
          </p>

          <img
            // src="https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="https://images.pexels.com/photos/70955/pexels-photo-70955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Presentation"
          />
        </figure>
      </section>
      <section id="features" className="featuredcourses w-full h-full flex">
        <div className="bgcontainer w-full h-full">
          <div>
            <h3>Featured Courses</h3>
            <p>
              Explore our expertly designed featured courses to accelerate your
              career.
            </p>
          </div>
        </div>
        <Course
          title=" Cabin Crew Training"
          image="https://images.pexels.com/photos/3119983/pexels-photo-3119983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="our cabin crew training program is designed to equip students with the skills needed to provide exceptional inflight services. the course covers grooming, communication, soft skills and personality development"
        />
        <Course
          title="Ground Staff Training"
          image="https://images.pexels.com/photos/7820308/pexels-photo-7820308.jpeg?auto=compress&cs=tinysrgb&w=600"
          // image="https://images.pexels.com/photos/3069147/pexels-photo-3069147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="our ground staff training program prepare students for a variety of roles in airport operations the curriculum includes training in passenger handling, baggage management ticketing and customer service"
        />
        <Course
          title="Customer Support Training"
          image="https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="Our customer support training equips individuals with the skills to communicate effectively, resolve issues efficiently, and deliver exceptional service to ensure customer satisfaction and loyalty."
        />
      </section>

      <section className="whychooseus flex w-full h-full">
        <div className="bgcontainer w-full h-full">
          <div></div>
        </div>
        <img
          src="https://images.pexels.com/photos/380287/pexels-photo-380287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Interactive platform"
        />
        <article className="container h-full">
          <h2>Why Choose Us</h2>
          <p>
            Experience top-notch training at Aero Mingle, where expert
            instructors guide you through comprehensive programs. Our courses
            are designed to equip you with the skills needed to excel in the
            aviation industry. Join us to unlock your potential and embark on a
            rewarding career. Together, we’ll help you soar to new heights.
          </p>
          <p>
            At Aero Mingle, we are committed to shaping the future of aviation
            professionals. Join us and take the first step toward a successful
            career in the industry.
          </p>
          <div className="bottom-container">
            <span>
              Tip <TungstenIcon />
            </span>
            Successful people focus on their own journey, never comparing
            themselves to others. Believe in yourself, and you'll achieve
            greatness.
          </div>
        </article>
      </section>

      <section className="virualexperience flex w-full h-full">
        <figure className="img-container h-full">
          <img
            src="https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Virtual experience"
          />
          <figcaption className="text-container h-full w-full flex">
            <h2>Virtual Learning Experience</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              deserunt quaerat, similique praesentium eos, dignissimos dolores
              tempora iusto placeat, unde distinctio repellat natus odio
              doloremque.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              deserunt quaerat, similique praesentium eos, dignissimos dolores
              tempora iusto placeat, unde distinctio repellat natus odio
              doloremque.
            </p>
          </figcaption>
        </figure>
        <div className="container h-full flex">
          <div>
            <AirplayIcon />
            <span>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur vero, distinctio fugit ipsa nostrum ducimus
                quibusdam assumenda alias incidunt a.
              </p>
            </span>
          </div>
          <div>
            <AirplayIcon />
            <span>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur vero, distinctio fugit ipsa nostrum ducimus
                quibusdam assumenda alias incidunt a.
              </p>
            </span>
          </div>
          <div>
            <AirplayIcon />
            <span>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur vero, distinctio fugit ipsa nostrum ducimus
                quibusdam assumenda alias incidunt a.
              </p>
            </span>
          </div>
        </div>
      </section>

      {/* <section className="testimonials w-full h-full flex">
        <div className="testimonial-container flex">
          <div className="corosel flex  w-full" style={{}}>
            {testarry.map((item) => (
              <Testimonial key={item.img} name={item.name} img={item.img} />
            ))}
           
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="text-container flex">
          <h4>Our Students</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
            ea dolor doloribus eos quae natus consequatur velit temporibus.
            Numquam veritatis magnam quos dolorum sit.
          </p>
        </div>
      </section> */}

      <section className="faqs w-full h-full flex">
        <div className="text-container h-full flex">
          <h4>FAQs</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
            ea dolor doloribus eos quae natus consequatur velit temporibus.
            Numquam veritatis magnam quos dolorum sit.
          </p>
        </div>
        <div className="qna h-full flex">
          <div className="container w-full flex">
            <div>
              <TungstenIcon />
              <span>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vero, distinctio fugit ipsa nostrum ducimus
                  quibusdam assumenda alias incidunt a.
                </p>
              </span>
            </div>
            <div>
              <TungstenIcon />
              <span>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vero, distinctio fugit ipsa nostrum ducimus
                  quibusdam assumenda alias incidunt a.
                </p>
              </span>
            </div>
            <div>
              <TungstenIcon />
              <span>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vero, distinctio fugit ipsa nostrum ducimus
                  quibusdam assumenda alias incidunt a.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="contactus w-full flex">
        <div>
          <h4>Lets</h4>
          <h4>Connect</h4>
          <p>
            Let’s connect and discuss how we can help you achieve your goals. If
            you have any queries or want to learn more, reach out to us today
          </p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            maxLength={30}
          />
          <input type="email" name="email" placeholder="Email" maxLength={30} />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            maxLength={10}
            minLength={10}
          />
          <textarea
            name="message"
            id=""
            placeholder="Message"
            maxLength={400}
          ></textarea>
          <button>
            <ArrowForwardIcon />
          </button>
        </form>
      </section>
      <footer className="flex w-full">
        <div className="container">
          <h6>Contact Info</h6>
          <ul>
            <li>Email:jhonDoe@gmail.com</li>
            <li>Phone: 123456789</li>
            <li>Address:shaitan gali khatra mehal</li>
          </ul>
        </div>
        <div className="container">
          <h6>Navigation</h6>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Vertual Learning Experience</li>
            <li>Carrer Support</li>
          </ul>
        </div>
        <div className="container">
          <h6>Follow Us</h6>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>instagram</li>
            <li>Linkdin</li>
          </ul>
        </div>
        <div className="container">
          <h6>Legal</h6>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div className="container">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          ullam quaerat delectus doloremque explicabo nam, molestiae distinctio
          aut corrupti cum repudiandae voluptate omnis ratione fugit ut dolore
          repellat deleniti similique beatae optio provident facere. At.
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, at?</p>
      </footer>
    </div>
  );
};

export default Homepage;
