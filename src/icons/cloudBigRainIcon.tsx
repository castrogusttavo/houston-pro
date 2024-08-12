import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudBigRainIcon({ iconName = "cloud-big-rain", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}