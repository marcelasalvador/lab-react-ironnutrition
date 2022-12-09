import './App.css';

import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'


function App() {
  
  const [foodArr, setFoodArray] = useState(foods);
  const [filteredFoodArr, setFilteredFoodArray] = useState(foods);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);
  
  const updateName = event => setName(event.target.value)
  const updateImage = event => setImage(event.target.value)
  const updateCalories = event => setCalories(event.target.value)
  const updateServings = event => setServings(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('form submitted ✅');

    const copyFoodArray = [...foodArr];
    const ourNewFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    };
    copyFoodArray.push(ourNewFood);
    setFoodArray(copyFoodArray);
    
  }
  
  const handleRemove = (name) => {
    const updatedList = filteredFoodArr.filter((item) => item.name !== name);
    console.log(updatedList)
    setFilteredFoodArray(updatedList);
  }  



  return (
    <div className="App">
    
      <h1>Add Food Entry</h1>
      <AddFoodForm  
      name={name} 
      updateName={updateName}
      image={image} 
      updateImage={updateImage}
      calories={calories}
      updateCalories={updateCalories} 
      servings={servings}
      updateServings={updateServings}
      handleSubmit={handleSubmit}
      />

  

      <h1><span>search bar:</span></h1>
        <input 
          onChange={(event) => {
            const newSearch = foodArr.filter ((singleFood) => {
              return singleFood.name.toLowerCase().includes(event.target.value.toLowerCase())

            })
            console.log(newSearch)
            setFilteredFoodArray(newSearch)
          }
          
          }

        />

    
      <Row>
      <h1>Food List</h1>
      {filteredFoodArr.map((element) => {
        return (
          <FoodBox foodObject={element}
          clickToDelete={handleRemove}
          />
        );

       
      })}
      
      </Row>
      

    </div>
  );
}

export default App;
