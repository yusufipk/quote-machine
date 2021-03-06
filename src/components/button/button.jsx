import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export const QuoteButton = (props) => {
  return (
    <Button
      variant={props.variant}
      href={props.href}
      target={props.target}
      onClick={props.click}
    >
      {props.text}
    </Button>
  );
};
