import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Cash01Icon({ iconName = "cash01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}