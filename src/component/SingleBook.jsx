import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState((e) => ({
      selected: !e.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const cardStyle = this.state.selected ? "selected-card" : "";
    return (
      <Col sm={6} md={3} lg={3} xl={3} className="mb-5">
        <Card className={cardStyle} onClick={this.handleClick}>
          <Card.Img variant="top" src={book.img} className="card-img" />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{book.title}</Card.Title>
            <Card.Text className="card-category">Category: {book.category}</Card.Text>
            <Card.Text className="card-price">{book.price}$</Card.Text>
            <Button variant="primary" className="card-button">
              Buy It
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
