import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Card = ({ children, className }) => (
    <div
      className={clsx(
        "bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 sm:p-6 transition-all animate-fadeIn",
        className
      )}
    >
      {children}
    </div>
  );

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
