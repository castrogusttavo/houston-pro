import React from 'react'
import { Icon, IconProps } from '../Icon'

export function allahIcon({ iconName = "allah", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}