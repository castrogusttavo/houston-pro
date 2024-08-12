import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dollarSquareIcon({ iconName = "dollar-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}