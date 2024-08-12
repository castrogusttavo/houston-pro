import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doorIcon({ iconName = "door", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}