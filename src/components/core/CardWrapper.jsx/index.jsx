import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CardWrapper({
  customClass,
  showActionBtn = false,
  actionBtnType = 'default',
  dialogContent,
  customActionBtn,
  customActionBtnClass,
  children,
}) {
  return (
    <div
      className={`relative p-3 bg-white/5 border rounded-xl border-gray-500 ${customClass}`}
    >
      {showActionBtn &&
        (actionBtnType === 'default' ? (
          <button
            className={`px-2 py-0 absolute top-2 right-1 rounded-full hover:bg-green-500/50 cursor-pointer ${customActionBtnClass}`}
          >
            {customActionBtn ? (
              customActionBtn
            ) : (
              <FontAwesomeIcon icon={faEllipsis} />
            )}
          </button>
        ) : actionBtnType === 'dialog' ? (
          <Dialog>
            <DialogTrigger
              className={`px-2 py-0 absolute top-2 right-1 rounded-full hover:bg-green-500/50 cursor-pointer ${customActionBtnClass}`}
            >
              {customActionBtn ? (
                customActionBtn
              ) : (
                <FontAwesomeIcon icon={faEllipsis} />
              )}
            </DialogTrigger>
            {dialogContent && (
              <DialogContent className={'p-4 w-[80%]'}>
                {dialogContent}
              </DialogContent>
            )}
          </Dialog>
        ) : (
          <></>
        ))}
      {children}
    </div>
  );
}

export default CardWrapper;
