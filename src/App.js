import './App.css';
import Header from "./Header";
import ALaUne from './ALaUne';
import Profile from './Profile';
import Recettes from './Recettes';
import CocktailSingle from './CocktailSingle';
import Footer from './Footer';

function App() {
  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      img: "https://static.750g.com/images/1200-675/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      img: "https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/209773/margarita-cocktail-AdobeStock_204560742.jpg",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      img: "https://www.cocktailmag.fr/media/k2/items/cache/5fa21cd9e0d2531a2f1dfdffbab46f70_M.jpg",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      img: "https://bakeitwithlove.com/wp-content/uploads/2022/07/Pina-Colada-Mocktail-sq.jpg",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    },
    {
      id: 5,
      name: "Bloody Mary",
      price: 8,
      ingredients: ["Vodka", "Jus de tomate", "Sauce Worcestershire"],
      isPublished: true,
    }, {
      id: 6,
      name: "Ti punch",
      price: 8,
      ingredients: ["Rhum", "Citron vert", "Sirop de canne"],
      isPublished: true,
    }
  ];


  const userFromApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };
  return (
    <div>
      <Header userFromApi={userFromApi} />
      <ALaUne cocktailsFromApi={cocktailsFromApi} />
      <Profile userFromApi={userFromApi} />
      <Recettes cocktailsFromApi={cocktailsFromApi} />
      {/* <CocktailSingle /> */}
      <Footer />

    </div>
  );
}

export default App;
