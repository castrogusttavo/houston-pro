import React from 'react'
import { Icon, IconProps } from '../Icon'

export function plusMinus02Icon({ iconName = "plus-minus02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}