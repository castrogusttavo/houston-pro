import React from 'react'
import { Icon, IconProps } from '../Icon'

export function plusSignIcon({ iconName = "plus-sign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}