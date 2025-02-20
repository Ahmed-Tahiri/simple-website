import { Header } from '../header.jsx';


export let AboutPage = () => {
    return (<>
        <Header />
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src='/public/assets/images/logo.png' alt="Company Logo" width="200" height="200" />
            <h1 className="display-5 fw-bold text-body-emphasis">About Page</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4"><span className='fw-semibold'>CodeNest</span> – The ultimate destination for developers! Learn through in-depth tutorials, solve coding challenges, stay ahead with the latest tech trends, and collaborate on exciting projects. Whether you're a beginner or a pro, CodeNest is where innovation meets growth. Join us and level up your coding journey! </p>
                <button type='button' className='btn btn-primary'><a className='nav-link' href='/'>Back to Home</a></button>
            </div>
        </div>
    </>);
}