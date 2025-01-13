import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ImageActualSizeIcon({
  iconName = 'image-actual-size',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
