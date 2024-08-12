import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mic01Icon({ iconName = 'mic01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
