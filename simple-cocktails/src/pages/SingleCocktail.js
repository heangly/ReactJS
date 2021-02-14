import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        let { drinks } = await response.json();
        drinks = drinks[0];
        drinks &&
          setCocktail({
            name: drinks.strDrink,
            image: drinks.strDrinkThumb,
            info: drinks.strAlcoholic,
            category: drinks.strCategory,
            glass: drinks.strGlass,
            instructions: drinks.strInstructions,
            ingredients: [
              drinks.strIngredient1,
              drinks.strIngredient2,
              drinks.strIngredient3,
              drinks.strIngredient4,
              drinks.strIngredient5,
            ],
          });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item},</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
