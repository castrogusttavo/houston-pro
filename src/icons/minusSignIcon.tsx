import React from 'react'
import { Icon, IconProps } from '../Icon'

export function minusSignIcon({ iconName = "minus-sign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}