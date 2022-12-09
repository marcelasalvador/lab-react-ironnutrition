import { Card, Col, Button } from 'antd';

function FoodBox(props) {

    const { clickToDelete } = props;

    return (
      <Col>
        <Card
          title={props.foodObject.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.foodObject.image} height={60} alt="food" />
          <p>Calories: {props.foodObject.calories}</p>
          <p>Servings: {props.foodObject.name}</p>
          <p>
            <b>Total Calories: {props.foodObject.calories * props.foodObject.servings} </b> kcal
          </p>
          <Button 
          type="primary"
          //delete button code here
          onClick={() => clickToDelete(props.foodObject.name)} className="btn-delete"
          > 
          Delete 
          </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;