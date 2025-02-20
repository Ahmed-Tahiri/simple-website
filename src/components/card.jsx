export let ServiceCard = (props) => {
    let data = props.data;
    return (
        <div className="card serviceCard p-2">
            <img src={data.picture} className="card-img-top card_image" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.serviceName}</h5>
                <p className="card-text">Course Duration: <span className="fw-semibold">{data.CourseDuration}</span></p>
                <a href="#" className="btn btn-primary">{data.Price}</a>
            </div>
        </div>
    );
}