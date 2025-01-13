import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiEditingIcon({
  iconName = 'ai-editing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
