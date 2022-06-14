import React from 'react'
import { useNavigate } from 'react-router-dom';

const AboutPage:React.FC = () => {
   const navigate = useNavigate();
  return (
    <div className='container'>
       <h1>Information</h1>
       <p className='center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, accusamus adipisci quos quas unde veritatis voluptatem sed eaque magni natus?</p>
       <button className='btn red darken-4' onClick={()=>navigate(-1)}>Back</button>
       </div>
  )
}

export default AboutPage