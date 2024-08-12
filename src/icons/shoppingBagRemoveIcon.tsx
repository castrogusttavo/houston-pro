import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shoppingBagRemoveIcon({ iconName = "shopping-bag-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}