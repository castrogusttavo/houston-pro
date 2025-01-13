import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FileEmpty01Icon({
  iconName = 'file-empty-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
