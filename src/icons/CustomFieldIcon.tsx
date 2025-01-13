import React from 'react';
import { Icon, IconProps } from '../Icon';

export function CustomFieldIcon({
  iconName = 'custom-field',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
