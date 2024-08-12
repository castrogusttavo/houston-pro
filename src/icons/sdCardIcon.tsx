import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sdCardIcon({ iconName = "sd-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}