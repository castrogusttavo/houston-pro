import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Tick01Icon({ iconName = 'tick01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
