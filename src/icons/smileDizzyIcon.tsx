import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smileDizzyIcon({ iconName = "smile-dizzy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}