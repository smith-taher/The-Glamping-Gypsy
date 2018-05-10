import React from 'react';
import ImageGallery from '../photosHome';

const images = [
    {
      original: "/uploads/BeachBonfire.jpg",
      thumbnail: "/uploads/BeachBonfire.jpg"
    },
    {
      original: "/uploads/FieldTent.jpg",
      thumbnail: "/uploads/FieldTent.jpg"
    },
    {
      original: "/uploads/ForestTent.jpg",
      thumbnail: "/uploads/ForestTent.jpg"
    },
    {
      original: "/uploads/MountainTent.jpg",
      thumbnail: "/uploads/MountainTent.jpg"
    },
    {
      original: "/uploads/RedTent.jpg",
      thumbnail: "/uploads/RedTent.jpg"
    },
    {
      original: "/uploads/StarTent.jpg",
      thumbnail: "/uploads/StarTent.jpg"
    },
    {
      original: "/uploads/FieldofFog.jpg",
      thumbnail: "/uploads/FieldofFog.jpg"
    }
  ]

const Home = () => (
    <div>
        <div className="home-gallery">
            <ImageGallery images={images} />
        </div>
        <h1 className="home-h1">
            Welcome to The Glamping Gypsy
        </h1>
        <p>
            The Glamping Gypsy was an idea we had while driving back from spending a long weekend at the beach, in a hotel with noisy neighbors. We talked about the idea of getting the family out of the fancy hotels, away from their technology and have them experience the outdoors much like we did when we were kids. We dreamed of unique, one-of-a-kind getaways where people can explore their own terms.
        </p>
        <p>
            We beleive that luxury and comfort should not be sacraficed while enjoying the great outdoors. So we decided to venture out and open The Glamping Gypsy with our friends as business partners.
        </p>
        <p>
            Glamping with us is simple.
        </p>
        <p>
            We arrive before your check-in time to make sure your entire Glampsite is ready for your arrival. We pack our beautiful bell tents with many amenities you would expect from a nice hotel room. All you have to do is show up and enjoy your Glamping adventure.
        </p>
        <p>
            We work with a number of different campgrounds throughout the beautiful state of Georgia. We have carefully thought through all aspects and hope to provide a comfortable, memorable experience for you, your family and friends.
        </p>
    </div>
)

export default Home;