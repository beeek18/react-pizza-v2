import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
        const { data } = await axios.get(
          "https://63d0153a10982404378ccc77.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error to try loading pizza");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>"Loading..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <p>{pizza.title}</p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
