import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ImageRotationClockwiseIcon({
  iconName = 'image-rotation-clockwise',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
