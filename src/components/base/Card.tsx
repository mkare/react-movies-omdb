import { Link } from "react-router-dom";
import classnames from "classnames";

type CardProps = {
  className?: string;
  title?: string;
  body?: string;
  text?: string;
  link: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string | number;
  imageOverlay?: boolean;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  title,
  body,
  text,
  link,
  imageSrc,
  imageAlt,
  imageCaption,
  imageOverlay,
  children,
}) => {
  const classes = classnames(
    "bg-white rounded-lg shadow-lg overflow-hidden relative",
    className
  );

  return (
    <div className={classes}>
      {imageSrc && (
        <div className={classnames("relative overflow-hidden")}>
          <Link to={link}>
            <img
              src={
                imageSrc !== "N/A"
                  ? imageSrc
                  : "https://via.placeholder.com/400x600?text=Not+Found"
              }
              alt={imageAlt}
              className={classnames("object-cover w-full aspect-[4/6]", {
                "rounded-t-lg": !imageOverlay,
              })}
            />
          </Link>
          {imageCaption && (
            <div
              className={classnames("absolute bottom-0 left-0 right-0 py-2 px-4", {
                "bg-gray-900 bg-opacity-75 text-white text-sm": imageOverlay,
              })}
            >
              {imageCaption}
            </div>
          )}
        </div>
      )}
      {title && (
        <h2 className="mx-4 mb-4 mt-5 text-lg font-semibold leading-[0.95]">{title}</h2>
      )}
      {body && <div className="p-4">{body}</div>}
      {children && <div className="px-4 py-10 md:py-6">{children}</div>}
      {text && <p className="mb-2 p-4 text-gray-700">{text}</p>}
    </div>
  );
};

export default Card;
