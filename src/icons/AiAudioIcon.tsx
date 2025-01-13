import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiAudioIcon({
  iconName = 'ai-audio',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
