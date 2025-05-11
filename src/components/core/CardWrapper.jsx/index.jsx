import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CardWrapper({
  customClass,
  showActionBtn = false,
  customActionBtn,
  customActionBtnClass,
  children,
}) {
  return (
    <div
      className={`relative p-3 bg-white/5 border rounded-xl border-gray-500 ${customClass}`}
    >
      {showActionBtn && (
        <button
          className={`px-2 py-0 absolute top-2 right-1 rounded-full hover:bg-green-500/50 cursor-pointer ${customActionBtnClass}`}
        >
          {customActionBtn ? (
            customActionBtn
          ) : (
            <FontAwesomeIcon icon={faEllipsis} />
          )}
        </button>
      )}
      {children}
    </div>
  );
}

export default CardWrapper;
