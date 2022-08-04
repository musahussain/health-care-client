import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name: 'Fluoride Treatment',
            description: "Fluoride treatments can strengthen enamel and protect teeth against damage from plaque",
            img: fluoride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            description: "First, they'll place an adhesive material over the tooth. This material helps the composite bond to the tooth",
            img: cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            description: "Although the effects are brief and usually mild, you should be aware of these common side effects from whitening",
            img: whitening
        }
    ]
    return (
        <section className='mt-28 mb-28'>
            <h1 className='text-3xl font-bold uppercase'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-28'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;