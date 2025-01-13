import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ImageCounterClockwiseIcon({
  iconName = 'image-counter-clockwise',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
