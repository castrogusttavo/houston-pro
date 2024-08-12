import React from 'react'
import { Icon, IconProps } from '../Icon'

export function multiplicationSignIcon({ iconName = "multiplication-sign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}