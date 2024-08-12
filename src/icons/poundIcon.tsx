import React from 'react'
import { Icon, IconProps } from '../Icon'

export function poundIcon({ iconName = "pound", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}