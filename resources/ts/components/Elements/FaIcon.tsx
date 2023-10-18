import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
const FaIcon = () => {
  return (
    <>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faSquare} color="green" />
        <FontAwesomeIcon icon={faCheck} inverse transform="shrink-6" />
      </span>
    </>
  );
};

export default FaIcon;
