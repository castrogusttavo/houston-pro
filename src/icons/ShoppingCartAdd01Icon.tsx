import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingCartAdd01Icon({
  iconName = 'shopping-cart-add01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
