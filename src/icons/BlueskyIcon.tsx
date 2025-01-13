import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BlueskyIcon({
  iconName = 'bluesky',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
