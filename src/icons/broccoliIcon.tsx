import React from 'react'
import { Icon, IconProps } from '../Icon'

export function broccoliIcon({ iconName = "broccoli", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}