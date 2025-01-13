import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiFileIcon({
  iconName = 'ai-file',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
