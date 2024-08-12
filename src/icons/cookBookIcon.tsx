import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cookBookIcon({ iconName = "cook-book", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}