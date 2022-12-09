// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value= {props.name} type="text"
      onChange={props.updateName} />

      <label>Image</label>
      <Input value= {props.image} type="text" 
      onChange={props.updateImage} />

      <label>Calories</label>
      <Input value= {props.calories} type="text" onChange={props.updateCalories} />

      <label>Servings</label>
      <Input value= {props.servings} type="number" onChange={props.updateServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;