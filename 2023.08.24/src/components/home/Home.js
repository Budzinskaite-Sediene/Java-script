import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Titulinis Puslapis</h1>

      <Link to="/about-us" className="btn btn-primary">
        Apie Mus
      </Link>
    </>
  );
};

export default Home;
