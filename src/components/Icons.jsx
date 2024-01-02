import { FaTimes, FaDotCircle, FaPencilAlt } from "react-icons/fa";

const Icons = ({ playerName }) => {
  return playerName === "X" ? (
    <FaTimes />
  ) : playerName === "O" ? (
    <FaDotCircle />
  ) : (
    <FaPencilAlt />
  );
};

export default Icons;
