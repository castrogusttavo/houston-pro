import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sodaCanIcon({ iconName = "soda-can", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}