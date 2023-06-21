import React from 'react';
import Banner from './Banner/Banner';

import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import HomeForm from './HomeForm/HomeForm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <HomeForm></HomeForm>
        </div>
    );
};

export default Home;