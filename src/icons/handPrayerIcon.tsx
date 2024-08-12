import React from 'react'
import { Icon, IconProps } from '../Icon'

export function handPrayerIcon({ iconName = "hand-prayer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}