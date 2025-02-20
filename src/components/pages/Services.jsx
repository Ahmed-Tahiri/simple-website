import '../../assets/css/serivcesPage.css';
import '../../assets/css/homePage.css';
import { Header } from '../header.jsx';
import { ServiceCard } from '../card.jsx';

let servicesData = [
    {
        'serviceName': 'Web Development',
        'CourseDuration': '6 Months',
        'Price': '50,000 PKR',
        'picture': `${import.meta.env.BASE_URL}assets/images/webdev.png`
    },
    {
        'serviceName': 'AI Course',
        'CourseDuration': '4 Months',
        'Price': '70,000 PKR',
        'picture': `${import.meta.env.BASE_URL}assets/images/aidev.png`
    },
    {
        'serviceName': 'App Development',
        'CourseDuration': '8 Months',
        'Price': '40,000 PKR',
        'picture': `${import.meta.env.BASE_URL}assets/images/appdev.png`
    },
    {
        'serviceName': 'Machine Learning',
        'CourseDuration': '10 Months',
        'Price': '100,000 PKR',
        'picture': `${import.meta.env.BASE_URL}assets/images/machinelearning.png`

    },

]
export let ServicesPage = () => {
    return (
        <>
            <Header />
            <section className='services_section d-flex flex-column justify-content-start align-items-center'>
                <h1 className='fw-bold fs-1'>Our Services</h1>
                <div className='d-flex gap-2 flex-wrap div-container'>
                    {servicesData.map((cardData, index) => (
                        <ServiceCard key={index} data={cardData} />
                    ))}

                </div>
            </section>
        </>
    );
}