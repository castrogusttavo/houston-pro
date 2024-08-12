import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shoppingCart01Icon({ iconName = "shopping-cart01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}