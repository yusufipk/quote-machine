import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export const QuoteButton = (props) => {
  return (
    <Button variant="outline-primary" onClick={props.click}>
      New Quote
    </Button>
  );
};
