import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hourglassIcon({ iconName = "hourglass", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}