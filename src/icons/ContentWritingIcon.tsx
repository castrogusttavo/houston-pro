import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ContentWritingIcon({
  iconName = 'content-writing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
