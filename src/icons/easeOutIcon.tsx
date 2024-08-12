import React from 'react'
import { Icon, IconProps } from '../Icon'

export function easeOutIcon({ iconName = "ease-out", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}