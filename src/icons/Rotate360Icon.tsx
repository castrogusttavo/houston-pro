import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Rotate360Icon({ iconName = 'rotate360', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
