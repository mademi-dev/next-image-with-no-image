import React from 'react';
import NextImage from 'next/image';

declare const VALID_LAYOUT_VALUES: readonly [
  'fill', 
  'fixed', 
  'intrinsic', 
  'responsive', 
  undefined
];
declare type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

declare const VALID_LOADING_VALUES: readonly [
   'lazy' , 
   'eager' ,
    undefined
];
declare type LoadingValue = typeof VALID_LOADING_VALUES[number];

declare const VALID_OBJECTFIT_VALUES: readonly [
  'contain',
  'cover',
  'fill',
  'none',
  'scale-down',
  'inherit',
  'initial',
  'revert',
  'unset', 
  undefined
];
declare type ObjectFitValue = typeof VALID_OBJECTFIT_VALUES[number];

const Image = ({
  src,
  width = 160,
  height = 90,
  layout = 'intrinsic',
  objectFit = 'cover',
  alt = '',
  className,
  priority = false,
  showNoImage = false,
  loading='lazy',
} : {
  src?: string | undefined | null,
  width?: number | string,
  height?: number | string,
  layout?: LayoutValue,
  objectFit?:  ObjectFitValue;
  alt?: string,
  className?: string,
  priority?: boolean,
  showNoImage?: boolean,
  loading?: LoadingValue,
}) => {
  return (
    <React.Fragment>
      {src ? (
        <NextImage {...{
          src,
          alt,
          width,
          height,
          layout,
          loading,
          priority,
          objectFit,
          className, 
        }} />
      ) : (
        <>
          {showNoImage && (
            <NextImage {...{
              src: src ? src : '/images/no-image.jpg',
              alt,
              width,
              height,
              layout,
              className,
              objectFit,
            }}/>
          )}
        </>
      )}
    </React.Fragment>
  );
}
export default Image;
