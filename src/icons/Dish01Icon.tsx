import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Dish01Icon({ iconName = "dish01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}