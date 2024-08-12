import React from 'react'
import { Icon, IconProps } from '../Icon'

export function discountIcon({ iconName = "discount", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}