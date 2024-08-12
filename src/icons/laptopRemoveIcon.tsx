import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopRemoveIcon({ iconName = "laptop-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}