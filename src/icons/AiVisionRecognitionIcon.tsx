import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiVisionRecognitionIcon({
  iconName = 'ai-vision-recognition',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
