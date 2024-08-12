import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hourglassOffIcon({ iconName = "hourglass-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}