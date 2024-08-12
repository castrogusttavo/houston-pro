import React from 'react'
import { Icon, IconProps } from '../Icon'

export function microwaveIcon({ iconName = "microwave", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}