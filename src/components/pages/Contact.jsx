import '../../assets/css/homePage.css';
import { Header } from '../header.jsx';

export let ContactPage = () => {
    return (<>
        <Header />
        <section className="contact_section div-container d-flex flex-column justify-content-start align-items-center gap-5">
            <h1 className='fw-bold fs-1'>Contact Us</h1>
            <form className='form contact_form mt-5'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Last Message</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Doe" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type Message here....'></textarea>
                </div>
                <button className='btn btn-primary'>Send Message</button>
            </form>
        </section>
    </>)
}