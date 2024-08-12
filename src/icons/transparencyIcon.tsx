import React from 'react'
import { Icon, IconProps } from '../Icon'

export function transparencyIcon({ iconName = "transparency", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}