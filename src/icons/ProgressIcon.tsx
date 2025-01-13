import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ProgressIcon({
  iconName = 'progress',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
