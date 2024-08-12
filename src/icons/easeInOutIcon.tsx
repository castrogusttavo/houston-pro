import React from 'react'
import { Icon, IconProps } from '../Icon'

export function easeInOutIcon({ iconName = "ease-in-out", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}