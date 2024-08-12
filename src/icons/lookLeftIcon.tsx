import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lookLeftIcon({ iconName = "look-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}