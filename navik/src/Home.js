// src/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chartGif from './chart.gif';
import trackerGif from './tracker.gif';
import rocketGif from './rocket.gif';
import { Link } from 'react-router-dom';
import './Home.css'; 
import FaceIcon from './faceIcon.png';
import InstagramIcon from './InstaIcon.png';
import TwitterIcon from './TwIcon.png';

function Home() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Build Better Habits, One Day at a Time</h1>
          <p className="lead">Our habit tracker app helps you stay on track and achieve your goals with ease.</p>
          <Link to="/login" className="btn btn-light btn-lg">Get Started</Link>
        </div>
      </header>
      
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={trackerGif} alt="Track Habits" className="img-fluid mb-3"/>
              <h3>Track Your Habits</h3>
              <p>Monitor your habits daily, weekly, or monthly.</p>
            </div>
            <div className="col-md-4 text-center">
            <img src={chartGif} alt="Visualize Progress" className="img-fluid mb-3"/>
              <h3>Visualize Your Progress</h3>
              <p>Use detailed charts to see your improvement over time.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src={rocketGif} alt="Stay Motivated" className="img-fluid mb-3"/>
              <h3>Stay Motivated</h3>
              <p>Earn streaks and achievements to keep you going.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial text-center">
                <p>"This app has completely transformed how I manage my habits. Highly recommend!"</p>
                <p>- Kyrie Irving</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial text-center">
                <p>"Simple, intuitive, and effective. The best habit tracker I've used."</p>
                <p>- Matthew McConaughey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4">
        <div className="container">
          <p>Contact us: info@chainhabit.com</p>
          <p>Follow us:</p>
          <a href="https://twitter.com/habittracker" target="_blank" rel="noopener noreferrer" className="mx-2"> <img src={TwitterIcon} alt='Twitter' /></a>
          <a href="https://facebook.com/habittracker" target="_blank" rel="noopener noreferrer" className="mx-2"><img src={FaceIcon} alt='Facebook' /></a>
          <a href="https://instagram.com/habittracker" target="_blank" rel="noopener noreferrer" className="mx-2"><img src={InstagramIcon} alt='Instagram' /></a>
          <div className="legal mt-3">
            <a href="#privacy" className="mx-2">Privacy Policy</a>
            <a href="#terms" className="mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
