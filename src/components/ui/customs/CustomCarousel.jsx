import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const getOrder = (index, pos, numItems) => {
  // const order =
  //   index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;

  const order = (index - pos + numItems) % numItems;

  return order;
};

const getInitialState = (numItems) => ({
  pos: numItems - 1,
  sliding: false,
  dir: 'NEXT',
});

const CustomCarousel = ({
  items = [],
  customClass,
  looping = true,
  showButtons = true,
  customBtnClass,
  showIndicators = true,
  customIndClass,
}) => {
  const numItems = items.length;

  const [slideState, setSlideState] = useState(getInitialState(numItems));

  const handleSlideState = (dir, count) => {
    setSlideState((prev) => {
      if (dir === 'STOP') return { ...prev, sliding: false };

      if (dir === 'PREV' || dir === 'NEXT') {
        const newPos = dir === 'PREV' ? prev.pos - 1 : prev.pos + 1;
        return {
          ...prev,
          dir,
          sliding: true,
          pos: newPos < 0 ? count - 1 : newPos % count,
        };
      }
      return prev;

      // if (dir === 'STOP') return { ...prev, sliding: false };

      // let newPos = prev.pos;
      // if (dir === 'PREV') {
      //   newPos = prev.pos - 1;
      //   if (newPos < 0) newPos = looping ? numItems - 1 : 0;
      // } else if (dir === 'NEXT') {
      //   newPos = prev.pos + 1;
      //   if (newPos >= numItems) newPos = looping ? 0 : numItems - 1;
      // }

      // return {
      //   ...prev,
      //   dir,
      //   sliding: true,
      //   pos: newPos,
      // };
    });

    // // End sliding state after animation
    // setTimeout(() => {
    //   setSlideState((prev) => ({ ...prev, sliding: false }));
    // }, 500); // match transition duration
  };

  const slide = (dir) => {
    handleSlideState(dir, numItems);
    setTimeout(() => {
      handleSlideState('STOP', numItems);
    }, 50);

    // handleSlideState(dir);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      !looping && slideState.pos === numItems - 2
        ? slide('STOP')
        : slide('NEXT'),
    // slide('NEXT'),
    onSwipedRight: () =>
      !looping && slideState.pos === numItems - 1
        ? slide('STOP')
        : slide('PREV'),
    // slide('PREV'),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,

    // onSwipedLeft: () => slide('NEXT'),
    // onSwipedRight: () => slide('PREV'),
    // swipeDuration: 500,
    // preventScrollOnSwipe: true,
    // trackMouse: true,
  });

  return (
    <div {...handlers} role="region" aria-label="carousel">
      <div className="relative">
        <div
          className={` max-w-[calc(100vw-2rem)] overflow-hidden ${customClass}`}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              transition: slideState?.sliding ? 'none' : 'transform 1s ease',
              transform: slideState?.sliding
                ? slideState.dir === 'PREV'
                  ? 'translateX(calc(2 * (-100% - 20px)))'
                  : 'translateX(0%)'
                : 'translateX(calc(-100% - 20px))',
              //
              // transition: 'transform 1s ease',
              // transform: `translateX(calc(-${slideState.pos} * (100% + 20px)))`,
            }}
          >
            {items.map((itm, index) => (
              <div
                key={index}
                className="w-[1rem] select-none "
                style={{
                  flex: '1 0 100%',
                  flexBasis: '100%',
                  order: getOrder(index, slideState.pos, numItems),
                  transition: slideState?.sliding
                    ? 'none'
                    : 'transform 1s ease',
                }}
              >
                {itm}
              </div>
            ))}
          </div>
        </div>
        {showButtons && (
          <>
            {(looping || !(slideState.pos === numItems - 1)) && (
              <button
                className="absolute z-10 top-1/2 -translate-y-1/2 -left-5 w-8 h-8 sm:text-2xl rounded-full text-white xl:bg-gray-500 lg:border border-gray-600  opacity-40 hover:opacity-100 cursor-pointer"
                onClick={() => slide('PREV')}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={` rounded-full ${customBtnClass}`}
                />
              </button>
            )}
            {(looping || !(slideState.pos === numItems - 2)) && (
              <button
                className="absolute z-10 top-1/2  -translate-y-1/2 -right-5 w-8 h-8 sm:text-2xl rounded-full text-white xl:bg-gray-500 lg:border border-gray-600  opacity-40 hover:opacity-100 cursor-pointer"
                onClick={() => slide('NEXT')}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={` rounded-full ${customBtnClass}`}
                />
              </button>
            )}
          </>
        )}
      </div>
      {showIndicators && (
        <div className="mt-4 flex justify-center items-center gap-2">
          {items.map((_, idx) => (
            <div
              key={idx}
              className={` h-2 rounded-full bg-gray-200 transition-all duration-400 ease-out ${
                idx ===
                (slideState.pos + 1 === numItems ? 0 : slideState.pos + 1)
                  ? 'opacity-100 w-8'
                  : 'opacity-50 w-2'
              } ${customIndClass}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
