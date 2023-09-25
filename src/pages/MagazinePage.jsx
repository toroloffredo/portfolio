/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import Navbar from "../component/navbar"
import { ImGithub, ImLinkedin } from "react-icons/im";


function MagazinePage() {
  return (
    <>
      <Navbar />


      <main className="magazineText">
        <section className="heading">
          
          <header className="hero">
            <h1 className="hero-title">Magazine Style Layout</h1>
          </header>
          
          <div className="author">
            <p className="author-name">
              By Jaime Toro
            </p>
            <p className="publish-date">
              October, 2023
            </p>
          </div>

          <div className="social-icons">
            <a href="Placeholder">
              
            </a>
            <a href="Placeholder2">
            
            </a>
            <a href="Placeholder3">
             
            </a>
            <a href="www.linkedin.com/in/jaime-toro-loffredo">
              <ImLinkedin />
            </a>
            <a href="https://github.com/toroloffredo">
              <ImGithub />
            </a>
          </div>
        </section>

        <section className="text">
          <p className="paragraph-one">
            During the several weeks of the bootcamp, we had to complete daily mini-projects that highlighted the material we just reviewed. 
            Some of these projects were very easy and straight forward, others had us scratching our heads and waiting for the next day to
            ask the teachers how to do them and see them complete the excercise. And through this mechanic we started to see a divergence between
            backend and frontend oriented people. <br/>Me? I moved towards the frontend without even noticing. In fact, my first two projects received a generous 
            amount of time in the frontend, the second you being my main resonsability. 
          </p>
          <p>
            That's not to say that I didn't touched the backend at all. On my last project I volunteered to work on the data base. Setting up schemas,
            creating JSON files to seed the database so there was something in the home page we could see while tweaking the UI, and later on setting up the forms so every one could add items to the database, 
            and then using Cloudinary for hosting the images. 
          </p>
          <p>
           At some point during the last project we were doing a bit of everything. There was a lot going on for the little time we had available, and of course there were snags alog the way.
           The bigest I recall was an authentication logic I was trying to setup so the behavior of the site addapted to the seller and the buyer. In the end team work saved the day and we were able to 
           confidently present our collective work and feel proud of what we had accomplished.
          </p>
          <blockquote>
            <div>
              <hr />
              <p className="quote">
                "There was a lot going on, and of course there were snags alog the way."
              </p>
              <hr />
            </div>
          </blockquote>
          <p>
            I really liked some of the smaller projects we did during our bootcamp. I have made a selection of my 
            favories, each one for a different reason, being something technical or if I tought I was cool, plain and simple.
            I still need to think of the approach I'm going to take. Chances are if you are reading this, I have posted some of these projects in this portfolio.
          </p>
          <p>
           At the moment of redaction of this article I'm still unsure about the CSS to use. I was thinking Tailwind but I also like Material Ui. 
           Both look interesting and I aleady have some experience with Material UI. I will need to learn Tailwind from scratch, but that is not really a problem the way I see it.
           I'm more preocupied with the actual dessign. After all, this portfolio is not just a technical capabilities witness, but my presentation card brand statement.
          </p>
          <p>
            On that regard, I preffer something more minimalist but without detriment to functionality. User experience should be intuitive and, as a user of this page, my goal
            is that you know what is available for you to intereact, and that you find everything easily without jumping around or guessing how to get to point A to B.
          </p>
        </section>
       
        <section className="text text-with-images">
          
          <article className="brief-history">
            <h3 className="list-title">A Brief History</h3>
            <p>Of my bootcamp</p>
            
            <ul className="lists">
              <li>
                <h4 className="list-subtitle">Module 1</h4>
                <p>
                  Getting the basics for HTML, CSS and JS(ECMA6). Intro to pair programing and some interesting javaScript labs. 
                  Diving deeping into javaScript territory, DOM manipulation,and OOP. We kick off our first project, making a game! 
                  Check it out <a href="https://toroloffredo.github.io/Cooper-coffee-challenge/" target="_blank" rel="noreferrer"><em className="list-subtitle">here.</em></a>
                </p>
              </li>
            <blockquote className="image-quote">
              <hr />
              <p className="quote">"It's going to be an easy day today" <br/>-Matt (our teacher)
              </p>
              <p className="list-subtitle">(it wasn't...) </p>
              <hr />
            </blockquote>
             
              <li>
                <h4 className="list-subtitle">Module 2</h4>
                <p>
                Full on javaScript. Node.js, Express, promises, async/await. Plus MongoDB, models and schemas. Pretty heavy duty module using EJS to write the front end. 
                As per usual we did another big project at the end. This one was a 2 person job, front and back end. We called it 
                <a href="https://homeboundexplorers.adaptable.app/"><em className="list-subtitle"> Homebound Explorers.</em></a>
                </p>
              </li>
              <li>
                <h4 className="list-subtitle">Module 3</h4>
                <p>
                  Remember when I said that module 2 was heavy duty? Well... this one generated 
                  a few moments when I wanted to jump out the window. 
                </p>
                  
                <p>
                  There's a lot of information to unpack and a 3rd and last project to tackle using React, full CRUD, Rest APIs, token based authentication, plus
                  everything we covered in the previous week. Four people team this time around. We did a clone of a well known second hand shop here in Spain. We called
                  our version: <br/><a href="https://poetic-conkies-880cc5.netlify.app/"><em className="list-subtitle"> Third Foot.</em></a>
                </p>
              </li>
            </ul>

          </article>
          <div className="image-wrapper">
            
            <img
              src="https://res.cloudinary.com/dr7hy6cp0/image/upload/v1695644042/Portfolio/zkxysmar7kmelt2fpd8y.jpg"
              alt="home page for my first project image"
              loading="lazy"
              className="image-gen"
            />
            
            <img
              src="https://res.cloudinary.com/dr7hy6cp0/image/upload/v1695644044/Portfolio/aolgpd1a5hyui8mwqw5y.png"
              alt="Activities page screenshot for my second project"
              loading="lazy"
              className="image-gen"
            />

            <img
              src="https://res.cloudinary.com/dr7hy6cp0/image/upload/v1695644655/Portfolio/q6bsodbhapaw9jes7c24.png"
              alt="Third projects home page"
              loading="lazy"
              className="image-gen"
            />          
          
            <aside className="side-text">
              <p>
                It was well worth intense multilayered learning discovery process. 
                Overall a very good and valuable experience. 
              </p>  
            </aside>
          </div>

        </section>
      </main>

    </>
  )


}

export default MagazinePage