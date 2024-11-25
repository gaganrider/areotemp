import React from 'react'


interface props {
  name:string,
  img:string
}

const Testimonial: React.FC<props> = ({name,img}) => {
  return (
    <div className="testimonial" aria-label="testimonial 1">
      <div>
      <img src={img} alt="" />
<h3>{name}</h3>
<p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ad. Nam saepe esse provident pariatur"  </p>
      </div>

    </div>
  )
}

export default Testimonial
