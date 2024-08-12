import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rollingPinIcon({ iconName = "rolling-pin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}