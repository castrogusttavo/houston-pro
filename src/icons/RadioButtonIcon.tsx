import React from 'react';
import { Icon, IconProps } from '../Icon';

export function RadioButtonIcon({
  iconName = 'radio-button',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
