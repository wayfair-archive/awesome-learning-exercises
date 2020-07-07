import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './grid-components.scss';

const SIZE_VALUES = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12
];

const FLEX_DIRECTION_PROPERTIES = [
  'row',
  'column',
  'row-reverse',
  'column-reverse'
];

const FLEX_WRAP_PROPERTIES = [
  'wrap',
  'nowrap',
  'wrap-reverse'
];

const ALIGN_ITEMS_PROPERTIES = [
  'center',
  'flex-start',
  'flex-end',
  'baseline'
];

const ALIGN_CONTENT_PROPERTIES = [
  'center',
  'flex-start',
  'flex-end',
  'baseline'
];

const JUSTIFY_ITEMS_PROPERTIES = [
  'center',
  'flex-start',
  'flex-end',
  'space-around',
  'space-between',
  'space-evenly'
];

const JUSTIFY_CONTENT_PROPERTIES = [
  'center',
  'flex-start',
  'flex-end',
  'space-around',
  'space-between',
  'space-evenly'
];

const ALL = 'all';
const SMALL = 'sm';
const MEDIUM = 'md';
const LARGE = 'lg';

export const BREAKPOINTS = {
  ALL: ALL,
  SMALL: SMALL,
  MEDIUM: MEDIUM,
  LARGE: LARGE,
};

const CLASSNAME_PREFIX = 'Block';

export function convertPropsToClassNames({
  classNameModifier,
  propValue,
}) {
  // Early return if no value
  if (propValue === null) {
    return '';
  }

  // If the value of the prop is a string or a number
  // then we apply that value at all breakpoints,
  if (typeof propValue === 'string' || typeof propValue === 'number') {
    return `${CLASSNAME_PREFIX}--${classNameModifier}-${propValue}`;
  }

  return cx(
    Object.entries(propValue).reduce((classnames, [breakpoint, value]) => {
      let className;
      // If the breakpoint is the `all` value, then we remove the -all modifier
      // to match the naming scheme above and indicate the styles apply at all breakpoints
      if (breakpoint === BREAKPOINTS.ALL) {
        className = `${CLASSNAME_PREFIX}--${classNameModifier}-${value}`;
      } else {
        className = `${CLASSNAME_PREFIX}--${breakpoint}-${classNameModifier}-${value}`;
      }
      return [...classnames, className];
    }, [])
  );
}

export const Block = ({
  children,
  size,
  flexDirection,
  flexWrap,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
}) => {

  const responsiveClassNames = [
    // Sizes
    {classNameModifier: 'size', propValue: size},
    // Flex Stuff
    {classNameModifier: 'alignItems', propValue: alignItems},
    {classNameModifier: 'alignContent', propValue: alignContent},
    {classNameModifier: 'justifyItems', propValue: justifyItems},
    {classNameModifier: 'justifyContent', propValue: justifyContent},
    {classNameModifier: 'flexDirection', propValue: flexDirection},
    {classNameModifier: 'flexWrap', propValue: flexWrap},
    // {classNameModifier: 'flexOrder', propValue: flexOrder},
  ].map(convertPropsToClassNames);

  return (
    <div
      className={cx(CLASSNAME_PREFIX, 
        ...responsiveClassNames
      )}
    >
      {children}
    </div>
  )
};

Block.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(SIZE_VALUES),
      small: PropTypes.oneOf(SIZE_VALUES),
      medium: PropTypes.oneOf(SIZE_VALUES),
      large: PropTypes.oneOf(SIZE_VALUES),
    }),
    PropTypes.oneOf(SIZE_VALUES),
  ]),
  flexDirection: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(FLEX_DIRECTION_PROPERTIES),
      small: PropTypes.oneOf(FLEX_DIRECTION_PROPERTIES),
      medium: PropTypes.oneOf(FLEX_DIRECTION_PROPERTIES),
      large: PropTypes.oneOf(FLEX_DIRECTION_PROPERTIES),
    }),
    PropTypes.oneOf(FLEX_DIRECTION_PROPERTIES),
  ]),
  flexWrap: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(FLEX_WRAP_PROPERTIES),
      small: PropTypes.oneOf(FLEX_WRAP_PROPERTIES),
      medium: PropTypes.oneOf(FLEX_WRAP_PROPERTIES),
      large: PropTypes.oneOf(FLEX_WRAP_PROPERTIES),
    }),
    PropTypes.oneOf(FLEX_WRAP_PROPERTIES),
  ]),
  alignItems: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(ALIGN_ITEMS_PROPERTIES),
      small: PropTypes.oneOf(ALIGN_ITEMS_PROPERTIES),
      medium: PropTypes.oneOf(ALIGN_ITEMS_PROPERTIES),
      large: PropTypes.oneOf(ALIGN_ITEMS_PROPERTIES),
    }),
    PropTypes.oneOf(ALIGN_ITEMS_PROPERTIES),
  ]),
  alignContent: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(ALIGN_CONTENT_PROPERTIES),
      small: PropTypes.oneOf(ALIGN_CONTENT_PROPERTIES),
      medium: PropTypes.oneOf(ALIGN_CONTENT_PROPERTIES),
      large: PropTypes.oneOf(ALIGN_CONTENT_PROPERTIES),
    }),
    PropTypes.oneOf(ALIGN_CONTENT_PROPERTIES),
  ]),
  justifyItems: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(JUSTIFY_ITEMS_PROPERTIES),
      small: PropTypes.oneOf(JUSTIFY_ITEMS_PROPERTIES),
      medium: PropTypes.oneOf(JUSTIFY_ITEMS_PROPERTIES),
      large: PropTypes.oneOf(JUSTIFY_ITEMS_PROPERTIES),
    }),
    PropTypes.oneOf(JUSTIFY_ITEMS_PROPERTIES),
  ]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.shape({
      all: PropTypes.oneOf(JUSTIFY_CONTENT_PROPERTIES),
      small: PropTypes.oneOf(JUSTIFY_CONTENT_PROPERTIES),
      medium: PropTypes.oneOf(JUSTIFY_CONTENT_PROPERTIES),
      large: PropTypes.oneOf(JUSTIFY_CONTENT_PROPERTIES),
    }),
    PropTypes.oneOf(JUSTIFY_CONTENT_PROPERTIES),
  ]),
};

Block.defaultProps = {
  size: 12,
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: null,
  alignContent: null,
  justifyItems: null,
  justifyContent: null,
};