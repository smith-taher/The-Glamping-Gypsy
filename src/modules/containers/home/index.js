import React from 'react';
import ImageGallery from '../photosHome';

const images = [
    {
      original: "https://static.wixstatic.com/media/bf4a77_67946f7047964277b1793d5146f08b8d~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_67946f7047964277b1793d5146f08b8d~mv2_d_3600_2400_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_67946f7047964277b1793d5146f08b8d~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_67946f7047964277b1793d5146f08b8d~mv2_d_3600_2400_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_83c88b30728a44ee9648f79c11a0f9b7~mv2_d_4240_2832_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_83c88b30728a44ee9648f79c11a0f9b7~mv2_d_4240_2832_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_83c88b30728a44ee9648f79c11a0f9b7~mv2_d_4240_2832_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_83c88b30728a44ee9648f79c11a0f9b7~mv2_d_4240_2832_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_1e66e967cd494621b2ed754692fbe34e~mv2_d_5811_3269_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_1e66e967cd494621b2ed754692fbe34e~mv2_d_5811_3269_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_1e66e967cd494621b2ed754692fbe34e~mv2_d_5811_3269_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_1e66e967cd494621b2ed754692fbe34e~mv2_d_5811_3269_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_109c4e00e91843b190c06d286dd4eb48~mv2.jpg/v1/fill/w_1486,h_805,al_c,q_85/bf4a77_109c4e00e91843b190c06d286dd4eb48~mv2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_109c4e00e91843b190c06d286dd4eb48~mv2.jpg/v1/fill/w_1486,h_805,al_c,q_85/bf4a77_109c4e00e91843b190c06d286dd4eb48~mv2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_53c8f7c41ff9496b97d66ca3b276c7fd~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_53c8f7c41ff9496b97d66ca3b276c7fd~mv2_d_3600_2400_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_53c8f7c41ff9496b97d66ca3b276c7fd~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_53c8f7c41ff9496b97d66ca3b276c7fd~mv2_d_3600_2400_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_d8d98e74ef8143c3a7fafe0696e441c0~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_d8d98e74ef8143c3a7fafe0696e441c0~mv2_d_3600_2400_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_d8d98e74ef8143c3a7fafe0696e441c0~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_d8d98e74ef8143c3a7fafe0696e441c0~mv2_d_3600_2400_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_b90ebc34762b4b11ac8527a4e831b34c~mv2_d_3600_2880_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_b90ebc34762b4b11ac8527a4e831b34c~mv2_d_3600_2880_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_b90ebc34762b4b11ac8527a4e831b34c~mv2_d_3600_2880_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_b90ebc34762b4b11ac8527a4e831b34c~mv2_d_3600_2880_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.webp"
    },
    {
      original: "https://static.wixstatic.com/media/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.webp",
      thumbnail: "https://static.wixstatic.com/media/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1920,h_1040,al_c,q_90,usm_0.66_1.00_0.01/bf4a77_09ded4525bd44d14ae850568e8d9f194~mv2_d_3600_2400_s_4_2.webp"
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