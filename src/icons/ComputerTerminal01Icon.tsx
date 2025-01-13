import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ComputerTerminal01Icon({
  iconName = 'computer-terminal-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
