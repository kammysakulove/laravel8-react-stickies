import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope, faGear, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, library, SizeProp } from '@fortawesome/fontawesome-svg-core';

const iconMap: { [key: string]: IconDefinition } = {
  faCircle: faCircle,
  faEnvelope: faEnvelope,
  faGear: faGear,
  faTrashCan: faTrashCan,
  faGoogle: faGoogle,
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

type FaIconProps = {
  icon?: string;
  stack?: [string, string];
  size?: SizeProp;
  color?: string;
};

const SingleIcon = ({ icon, size, color }: FaIconProps) => {
  const iconDifinition = icon && findIcon(icon);
  return iconDifinition ? <FontAwesomeIcon icon={iconDifinition} size={size} color={color} /> : null;
};

const StackedIcon = ({ stack, size, color }: FaIconProps) => {
  const iconBaseDifinition = stack && findIcon(stack[0]);
  const iconDifinition = stack && findIcon(stack[1]);
  const faSize = 'fa-' + size;

  return (
    <span className={`fa-stack ${faSize}`}>
      {iconBaseDifinition ? <FontAwesomeIcon icon={iconBaseDifinition} className="fa-stack-2x" color={color} /> : null}
      {iconDifinition ? <FontAwesomeIcon icon={iconDifinition} className="fa-stack-1x fa-inverse" /> : null}
    </span>
  );
};

export const FaIcon = ({ icon, stack, size = 'sm', color = 'black' }: FaIconProps) => {
  return (
    <>
      {icon && <SingleIcon icon={icon} size={size} color={color} />}
      {stack && <StackedIcon stack={stack} size={size} color={color} />}
    </>
  );
};
