import "./Card.css";

const Card = (props) => {
  // NOTE by adding props.className allows your wrapper to accept styling in other components
  const classes = "card " + props.className;
  // NOTE adding props.children allows you to use this comp as a wrap in other components
  return <div className={classes}>{props.children}</div>;
};

export default Card;
