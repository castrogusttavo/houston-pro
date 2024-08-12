import React from 'react'
import { Icon, IconProps } from '../Icon'

export function resize01Icon({ iconName = "resize01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}