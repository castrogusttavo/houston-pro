import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sleevelessIcon({ iconName = "sleeveless", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}