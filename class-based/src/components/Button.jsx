import { string, number, func } from 'prop-types';

const Button = ({ text, id, handleClick }) => {
  return <button onClick={() => handleClick(id)}>{text}</button>;
};

export default Button;

Button.propTypes = {
  text: string.isRequired,
  id: number.isRequired,
  handleClick: func.isRequired,
}