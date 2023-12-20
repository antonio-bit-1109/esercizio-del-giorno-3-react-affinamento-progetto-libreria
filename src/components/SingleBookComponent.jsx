import Card from "react-bootstrap/Card";

const SingleBookComponent = (props) => {
    return (
        <Card className="w-25">
            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleBookComponent;
