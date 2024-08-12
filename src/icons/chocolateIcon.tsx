import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chocolateIcon({ iconName = "chocolate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}