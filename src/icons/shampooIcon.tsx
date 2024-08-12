import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shampooIcon({ iconName = "shampoo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}