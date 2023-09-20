import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { getRestaurantData } from "./restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const restaurants = useSelector((store) => store.restaurants.data);
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchRestaurant = async () => {
      let data = await fetch("./restaurants.json")
        .then((data) => data.json())
        .catch((error) => console.log(error));

      dispatch(getRestaurantData(data.restaurants));
    };
    fetchRestaurant();
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Welcome to Foodie..!</h1>
      <Row>
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Col className="mt-3 mb-3" md={3} key={restaurant.id}>
                <Card>
                  <Card.Img
                    className="image"
                    variant="top"
                    src={`${restaurant.photograph}`}
                  />
                  <div className="card-content-container">
                    <Card.Body>
                      <Card.Title>{restaurant.name}</Card.Title>
                      <Card.Text>
                        <br />
                        <strong>Cuisine:</strong>
                        {restaurant.cuisine_type}
                        <br />
                        <strong>Address:</strong>
                        {restaurant.address}
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <Button
                    as={Link}
                    to={`/RestaurantDetail/${restaurant.id}`}
                    variant="primary"
                  >
                    More Details
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default Home;
