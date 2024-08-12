import React from 'react'
import { Icon, IconProps } from '../Icon'

export function crownIcon({ iconName = "crown", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}