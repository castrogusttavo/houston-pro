import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PackagingIcon({
  iconName = 'packaging',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
