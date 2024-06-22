import './App.css'
import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './NavBar'
import All  from './All'
import Fsd from './Fsd'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'
import "/node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  let data=[{
    image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  },
  {
    image:"https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?w=996&t=st=1703416197~exp=1703416797~hmac=4a4c534fb7f62453e30076ff22355a091f4dfe3ac5964032814536dbb3d7b9eb",
    head:"Data Science",
    content:"The current technological era is full of competition and those who have profound skillset are",
  },
  {
    image:"https://d2ms8rpfqc4h24.cloudfront.net/When_to_hire_full_stack_developer_1661527c98.jpg",
    head:"Career Development",
    content:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vectorAs it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",  
  },
  {
    image:"https://d2ms8rpfqc4h24.cloudfront.net/When_to_hire_full_stack_developer_1661527c98.jpg",
    head:"Full Stack Development",
    content:"Full stack developers rate their happiness above average."
  },
  {
    image:"https://miro.medium.com/v2/resize:fit:800/1*iLa3E1yYHoYhOloCqQv36Q.png",
    head:"Full Stack Development",
    content:"The most popular full stack frameworks include Laravel, Ruby on Rails, and Express."
  }, 
  {
    image:"https://empxtrack.com/wp-content/uploads/2009/03/career-development.jpg",
    head:"Career Development",
    content:"There are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition."
  },
  {
    image:"https://www.cummins.com/sites/default/files/styles/newsroom_hero_image/public/images/newsroom_article/cybersecurity.jpg?itok=lb55sMTR",
    head:"Cyber Security",
    content:"According to PayScale, the average annual salary for a Cyber Security Analyst in Nigeria ranges from ₦2,400,000 to ₦6,500,000. Glassdoor reports a similar range, with an average of ₦4,000,000 per year."
  },
  {
    image:"https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    head:"Data Science",
    content:"Data Science is more valuable than computer science. A Computer Scientist earns an annual salary of USD 100000 on average.",
  }, 
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsySUaDHOzVlfRXVMatQwEtP3kW14lixcBp_qfxXTCig&s",
    head:"Data Science",
    content:"Every one of us wants to work in top product-based companies, Right? But, Not everyone"
  }
]
  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/all' element={<All data={data}/>} />
    <Route path='/full-stack-developer' element={<Fsd data={data}/>} />
    <Route path='/data-science' element={<DataScience data={data}/>} />
    <Route path='/cyber-security' element={<CyberSecurity data={data}/>} />
    <Route path='/career' element={<Career data={data}/>} />
    <Route path='*' element={<Navigate to='/all' />} />

  </Routes>
  </BrowserRouter>
  </>
}

export default App