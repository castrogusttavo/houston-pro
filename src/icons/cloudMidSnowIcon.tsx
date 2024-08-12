import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudMidSnowIcon({ iconName = "cloud-mid-snow", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}