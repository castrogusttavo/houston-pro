import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ResizeFieldRectangleIcon({
  iconName = 'resize-field-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
