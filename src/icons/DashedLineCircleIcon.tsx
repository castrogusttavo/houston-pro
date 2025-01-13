import React from 'react';
import { Icon, IconProps } from '../Icon';

export function DashedLineCircleIcon({
  iconName = 'dashed-line-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
