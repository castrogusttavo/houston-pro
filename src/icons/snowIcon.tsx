import React from 'react'
import { Icon, IconProps } from '../Icon'

export function snowIcon({ iconName = "snow", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}