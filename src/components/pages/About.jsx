import { Header } from '../header.jsx';


export let AboutPage = () => {
    return (<>
        <Header />
        <div className="px-4 py-0 my-1 text-center d-flex justify-content-center flex-column align-items-center">
            <img className="d-block mx-auto mb-4" src={`${import.meta.env.BASE_URL}assets/images/logo.png`} alt="Company Logo" width="200" height="200" />
            <h1 className="display-5 fw-bold text-body-emphasis">About Page</h1>
            <div className="col-lg-6 mt-lg-5 mt-5">
                <p className="lead mb-4"><span className='fw-semibold'>CodeNest</span> – The ultimate destination for developers! Learn through in-depth tutorials, solve coding challenges, stay ahead with the latest tech trends, and collaborate on exciting projects. Whether you're a beginner or a pro, CodeNest is where innovation meets growth. Join us and level up your coding journey! </p>
            </div>
        </div>
    </>);
}
