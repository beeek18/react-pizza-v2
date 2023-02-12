import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios
          .get("https://63d0153a10982404378ccc77.mockapi.io/pizzas/" + id);
        setPizza(data);
      } catch (err) {
        console.log(err)
        alert('Error to get pizzas!');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <h4>${pizza.price}</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
