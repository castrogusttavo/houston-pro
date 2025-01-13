import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PetrolPumpIcon({
  iconName = 'petrol-pump',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
