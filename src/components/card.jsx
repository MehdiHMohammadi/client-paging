const Card = ({ imageUrl, name, skills, mobile, email }) => {
  // const Card = (props) => {
  return (
    <div className="card text-center border-0 shadow-lg">
      <div className="card-body">
        <img
          src={imageUrl}
          width={96}
          alt="card programmer"
          className="d-inline-block rounded-circle mb-3 "
        />
        <h6>{name}</h6>
        <p className="fs-sm text-muted ">{skills}</p>
        <p className="mt-4 mb-0 fs-sm fw-bold">{mobile}</p>
        <p className="fs-sm fw-bold">{email}</p>
      </div>
    </div>
  );
};

export default Card;
