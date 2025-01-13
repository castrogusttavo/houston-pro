import React from 'react';
import { Icon, IconProps } from '../Icon';

export function WhiteboardIcon({
  iconName = 'whiteboard',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
