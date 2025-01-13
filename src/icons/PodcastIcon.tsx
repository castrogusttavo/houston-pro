import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PodcastIcon({
  iconName = 'podcast',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
