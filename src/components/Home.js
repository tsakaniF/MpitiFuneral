import React from 'react';
import './Home.css'; // Optional: Create a CSS file for additional styling
import './Carousel.css'; // Corrected casing for the Carousel component
import Carousel from './Carousel'; // Ensure Carousel is imported correctly

const Home = () => {
  const icon = 'your-icon-class'; // Define the icon variable with a default class name

  return (
    <div className="container">{/* Carousel and Widget Section */}
      <div className="  carouselContainer">
        <Carousel /> {/* Use the Carousel component here */}
        <div className="widgetRow">
          <div className="elementorWidgetContainer">
            <div className="iconBox">
              <i className={`fas fa-user-plus ${icon}`}></i>
            </div>
            <h3>Join Mpiti</h3>
            <p>Sign up today and save</p>
          </div>
          <div className="elementorWidgetContainer">
            <div className="iconBox">
              <i className={`fas fa-file-alt ${icon}`}></i>
            </div>
            <h3>Claims Submissions</h3>
            <p>Get claim information</p>
          </div>
          <div className="elementorWidgetContainer">
            <div className="iconBox">
              <i className={`fas fa-phone-alt ${icon}`}></i>
            </div>
            <h3>Call Me Back</h3>
            <p>SMS "Mpiti" to 00000</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="gallery my-5">
        <h2 className="text-center">Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="/images/gallery4.jpg" alt="Gallery Image 1" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4">
            <img src="/images/gallery2.jpg" alt="Gallery Image 2" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4">
            <img src="/images/gallery3.jpg" alt="Gallery Image 3" className="img-fluid gallery-image" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials my-5">
        <h2 className="text-center">Testimonials</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"The service was exceptional and very compassionate."</p>
                <h5 className="card-title">- John Doe</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"They helped us through a difficult time with grace."</p>
                <h5 className="card-title">- Jane Smith</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Highly recommend their services!"</p>
                <h5 className="card-title">- Emily Johnson</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog my-5">
        <h2 className="text-center">Latest Blog Posts</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Understanding Grief</h5>
                <p className="card-text">A guide to understanding the grieving process.</p>
                <a href="/blog/understanding-grief" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Planning a Funeral</h5>
                <p className="card-text">Tips for planning a meaningful funeral service.</p>
                <a href="/blog/planning-a-funeral" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Coping with Loss</h5>
                <p className="card-text">Strategies for coping with the loss of a loved one.</p>
                <a href="/blog/coping-with-loss" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Locations Section */}
      <section className="payment-locations my-5">
        <div className="infoSection1">
          <div className="column1">
            <p className="highlightedText">You can make your payments from the following stores</p>
            <img src="/images/store1.png" alt="Store 1" className="storeImage" />
            <img src="/images/store2.jpg" alt="Store 2" className="storeImage" />
            <img src="/images/store3.jpg" alt="Store 3" className="storeImage" />
            <img src="/images/store4.jpg" alt="Store 4" className="storeImage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
