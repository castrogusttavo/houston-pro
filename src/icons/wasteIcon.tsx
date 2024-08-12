import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wasteIcon({ iconName = "waste", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}