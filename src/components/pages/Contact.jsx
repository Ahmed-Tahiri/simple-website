import { useState } from 'react';
import '../../assets/css/homePage.css';
import { Header } from '../header.jsx';

export let ContactPage = () => {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [contact, setContact] = useState('');
    let [city, setCity] = useState('');
    let [bio, setBio] = useState('');
    let nameHandler = (e) => {
        setName(e.target.value);
    }
    let emailHandler = (e) => {
        setEmail(e.target.value);
    }
    let contactHandler = (e) => {
        setContact(e.target.value);
    }
    let cityHandler = (e) => {
        setCity(e.target.value);
    }
    let bioHandler = (e) => {
        setBio(e.target.value);
    }



    let submitHandler = (e) => {
        e.preventDefault();
        let validationCheck = true;
        if (name === null || name === '' || typeof name !== 'string') {
            validationCheck = false;
        }
        if (email === null || email === '' || typeof email !== 'string') {
            validationCheck = false;
        }
        if (contact === null || contact === '') {
            validationCheck = false;
        }
        if (city === null || city === '' || typeof city !== 'string') {
            validationCheck = false;
        }
        if (bio === null || bio === '' || typeof bio !== 'string') {
            validationCheck = false;
        }
        if (validationCheck) {
            alert(`
                Name: ${name}\n
                Email: ${email}\n
                Contact: ${contact}\n
                City: ${city}\n
                Bio: ${bio}\n
                `);
        } else {
            alert(`Please Enter Valid Data in all fields`);
        }

    }
    return (<>
        <Header />
        <section className="contact_section div-container d-flex flex-column justify-content-start align-items-center gap-5">
            <h1 className='fw-bold fs-1'>Contact Us</h1>
            <form className='form contact_form mt-5' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" value={name} onChange={nameHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="johndoe@gmail.com" value={email} onChange={emailHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact</label>
                    <input type="text" className="form-control" id="contact" placeholder="03335910691" value={contact} onChange={contactHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Islamabad" value={city} onChange={cityHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Enter Your Bio</label>
                    <textarea className="form-control" id="bio" rows="3" placeholder='Type Bio here....' onChange={bioHandler} value={bio}></textarea>
                </div>
                <button className='btn btn-primary' type='submit'>Send Message</button>
            </form>
        </section>
    </>)
}