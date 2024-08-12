import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hoodieIcon({ iconName = "hoodie", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}