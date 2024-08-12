import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shoppingBagCheckIcon({ iconName = "shopping-bag-check", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}