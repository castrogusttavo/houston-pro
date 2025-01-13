import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FileEmpty02Icon({
  iconName = 'file-empty-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
