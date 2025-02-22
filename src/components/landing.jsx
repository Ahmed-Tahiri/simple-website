import '../assets/css/homePage.css';

export let LandingSection = () => {
    return (<>
        <section className="div-container landing_section d-flex flex-column flex-lg-row justify-content-between gap-5">
            <div className=' text_container w-lg-50 w-100 h-100 d-flex justify-content-center flex-column align-items-start gap-2'>
                <h2 className='text landing_heading text-lg-start text-md-start text-sm-start'>Welcome to the hub of Coding<br /><span className='text-secondary fw-semibold'>CodeNest</span></h2>
                <p className='landing_text'>CodeNest is a vibrant community where developers learn, collaborate, and innovate. Explore tutorials, challenges, and the latest tech trends. Build projects, enhance your skills, and grow with us! </p>
                <button type='button' className='btn btn-primary px-5 fw-semibold mt-lg-5 mt-3 fs-lg-5 fs-6'>Explore</button>
            </div>
            <div className='img_container h-100 w-lg-50 w-100 d-flex justify-content-end'>
                <img className='landingPage_image' src={`${import.meta.env.BASE_URL}assets/images/ai-site-helping-with-software-production-ezgif.com-jpg-to-webp-converter.webp`} alt='Landing Page Image' />
            </div>
        </section>
    </>);
}
