import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiSchedulingIcon({
  iconName = 'ai-scheduling',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
