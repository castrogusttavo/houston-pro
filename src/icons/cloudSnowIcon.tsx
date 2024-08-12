import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudSnowIcon({ iconName = "cloud-snow", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}