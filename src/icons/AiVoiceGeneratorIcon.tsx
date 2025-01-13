import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiVoiceGeneratorIcon({
  iconName = 'ai-voice-generator',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
