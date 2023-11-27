import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBackward,
  faBell,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCircleArrowDown,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleArrowUp,
  faCircleChevronDown,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleChevronUp,
  faCircleMinus,
  faCircleNotch,
  faCirclePlus,
  faComment,
  faDiamond,
  faEnvelope,
  faFolderOpen,
  faForward,
  faGear,
  faHeart,
  faHouse,
  faKey,
  faLayerGroup,
  faLock,
  faMagnifyingGlass,
  faMinus,
  faPause,
  faPen,
  faPlay,
  faPlus,
  faRotate,
  faSpinner,
  faSquare,
  faSquareCaretDown,
  faSquareCaretLeft,
  faSquareCaretRight,
  faSquareCaretUp,
  faStop,
  faThumbsUp,
  faTrashCan,
  faTriangleExclamation,
  faUser,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useToken } from '@chakra-ui/react';

const iconMap: { [key: string]: IconDefinition } = {
  faCircle: faCircle,
  faSquare: faSquare,
  faDiamond: faDiamond,
  faArrowUp: faArrowUp,
  faArrowDown: faArrowDown,
  faArrowRight: faArrowRight,
  faArrowLeft: faArrowLeft,
  faCircleArrowUp: faCircleArrowUp,
  faCircleArrowDown: faCircleArrowDown,
  faCircleArrowRight: faCircleArrowRight,
  faCircleArrowLeft: faCircleArrowLeft,
  faSquareCaretUp: faSquareCaretUp,
  faSquareCaretDown: faSquareCaretDown,
  faSquareCaretRight: faSquareCaretRight,
  faSquareCaretLeft: faSquareCaretLeft,
  faChevronUp: faChevronUp,
  faChevronDown: faChevronDown,
  faChevronRight: faChevronRight,
  faChevronLeft: faChevronLeft,
  faCircleChevronUp: faCircleChevronUp,
  faCircleChevronDown: faCircleChevronDown,
  faCircleChevronRight: faCircleChevronRight,
  faCircleChevronLeft: faCircleChevronLeft,
  faPlus: faPlus,
  faMinus: faMinus,
  faCirclePlus: faCirclePlus,
  faCircleMinus: faCircleMinus,
  faBell: faBell,
  faTriangleExclamation: faTriangleExclamation,
  faPen: faPen,
  faEnvelope: faEnvelope,
  faKey: faKey,
  faLock: faLock,
  faUser: faUser,
  faComment: faComment,
  faHeart: faHeart,
  faThumbsUp: faThumbsUp,
  faLayerGroup: faLayerGroup,
  faGear: faGear,
  faHouse: faHouse,
  faTrashCan: faTrashCan,
  faMagnifyingGlass: faMagnifyingGlass,
  faFolderOpen: faFolderOpen,
  faPlay: faPlay,
  faPause: faPause,
  faBackward: faBackward,
  faForward: faForward,
  faStop: faStop,
  faVolumeHigh: faVolumeHigh,
  faVolumeXmark: faVolumeXmark,
  faSpinner: faSpinner,
  faCircleNotch: faCircleNotch,
  faRotate: faRotate,
  faGoogle: faGoogle,
  faYoutube: faYoutube,
  faTwitter: faTwitter,
  faInstagram: faInstagram,
};

library.add(...Object.values(iconMap));

const findIcon = (name: string): IconDefinition | undefined => {
  const formattedIconName =
    'fa' +
    name
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

  return iconMap[formattedIconName] || undefined;
};

export type FaIconProps = {
  icon?: string;
  stack?: [string, string];
  size?: SizeProp;
  color?: string;
  spin?: boolean;
};

const SingleIcon = ({ icon, size, color, spin }: FaIconProps) => {
  const iconDifinition = icon && findIcon(icon);
  return iconDifinition ? <FontAwesomeIcon icon={iconDifinition} size={size} style={{ color: color }} spin={spin} /> : null;
};

const StackedIcon = ({ stack, size, color, spin }: FaIconProps) => {
  const iconBaseDifinition = stack && findIcon(stack[0]);
  const iconDifinition = stack && findIcon(stack[1]);
  const faSize = 'fa-' + size;

  return (
    <span className={`fa-stack ${faSize}`}>
      {iconBaseDifinition ? <FontAwesomeIcon icon={iconBaseDifinition} className="fa-stack-2x" style={{ color: color }} spin={spin} /> : null}
      {iconDifinition ? <FontAwesomeIcon icon={iconDifinition} className="fa-stack-1x fa-inverse" spin={spin} /> : null}
    </span>
  );
};

export const FaIcon = ({ icon, stack, size = 'sm', color = 'black', spin = false }: FaIconProps) => {
  const iconColor = useToken('colors', color);

  return (
    <>
      {icon && <SingleIcon icon={icon} size={size} color={iconColor} spin={spin} />}
      {stack && <StackedIcon stack={stack} size={size} color={iconColor} spin={spin} />}
    </>
  );
};
