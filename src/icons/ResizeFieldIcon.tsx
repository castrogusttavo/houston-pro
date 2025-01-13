import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ResizeFieldIcon({
  iconName = 'resize-field',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
