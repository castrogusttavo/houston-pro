import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiVoiceIcon({
  iconName = 'ai-voice',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
