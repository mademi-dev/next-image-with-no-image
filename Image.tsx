import NextImage from 'next/image';

declare const VALID_LAYOUT_VALUES: readonly [
  'fill', 
  'fixed', 
  'intrinsic', 
  'responsive', 
  undefined
];
declare type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

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

export default function Image({
  src,
  width = 160,
  height = 90,
  layout = 'intrinsic',
  objectFit = 'cover',
  alt = '',
  className,
  priority = false,
  showNoImage = false,
}: {
  src?: string | undefined | null,
  width?: number | string,
  height?: number | string,
  layout?: LayoutValue,
  objectFit?:  ObjectFitValue;
  alt?: string,
  className?: string,
  priority?: boolean,
  showNoImage?: boolean,
}) {
  return (
    <>
      {src ? (
        <NextImage {...{
          src,
          alt,
          width,
          height,
          layout,
          loading: 'lazy',
          priority,
          objectFit,
          className, 
        }} />
      ) : (
        <>
          {showNoImage && (
            <Image {...{
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
    </>
  );
}
