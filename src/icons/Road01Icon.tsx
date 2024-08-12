import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Road01Icon({ iconName = "road01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}