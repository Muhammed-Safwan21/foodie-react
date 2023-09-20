import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "../Styles/RestaurantDetail.css";
import { useSelector } from "react-redux";

function RestaurantDetail() {
  const restaurants = useSelector((store) => store.restaurants.data);
  console.log('restaurants',restaurants)
  const { id } = useParams();

  let findRestaurants =
    restaurants && restaurants.find((item) => item.id == id);
  // console.log(findRestaurants)
  if (!findRestaurants) {
    return <div>Loading...</div>;
  }
  return (
    <>
    { findRestaurants && (
        <div className="container mt-4 mb-4">
          <Card>
          <Card.Body >
              <Row>
                <Col md={6}>
                  <div className="f-class">
                    <Card.Title>
                      <h1>{findRestaurants.name}</h1>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      className="restaurant-image"
                      src={`${findRestaurants.photograph}`}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Card.Text>
                    <div className="first-column">
                      <h4>Cuisine: {findRestaurants.cuisine_type}</h4>

                      <h4>Address:</h4>
                      {findRestaurants.address}
                      <br />
                      <br />
                      <h2>Opening Hours</h2>
                      <ul>
                        {Object.entries(findRestaurants.operating_hours).map(
                          ([day, hours]) => (
                            <li key={day}>
                              <strong>{day}: </strong>
                              {hours}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Card.Text>
                  <div className="second-row">
                    <h2>Reviews</h2>

                    <ul>
                      {findRestaurants.reviews.map((review, index) => (
                        <div className="review-box">
                          <li key={index}>
                            <p>
                              <strong>
                                {review.name} - {review.date}
                              </strong>
                            </p>
                            <h5>{review.rating}/5</h5>
                            <p>{review.comments}</p>
                          </li>
                          <br />
                        </div>
                      ))}
                    </ul>
                  </div>
                </Card.Text>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default RestaurantDetail;
