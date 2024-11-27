import {AlignX} from './AlignX';
import {AlignY} from './AlignY';
import {Flex} from './Flex';
import {Margin} from './Margin';
import {Padding} from './Padding';

export const Box = Object.assign(
  {},
  {
    alignX: AlignX,
    alignY: AlignY,
    flex: Flex,
    padding: Padding,
    margin: Margin,
  },
);
