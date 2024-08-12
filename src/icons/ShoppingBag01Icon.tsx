import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBag01Icon({
  iconName = 'shopping-bag01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
