import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dollarCircleIcon({ iconName = "dollar-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}