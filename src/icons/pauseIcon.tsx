import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pauseIcon({ iconName = "pause", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}