import React from 'react';
import { Icon, IconProps } from '../Icon';

export function HugeiconsIcon({
  iconName = 'hugeicons',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
