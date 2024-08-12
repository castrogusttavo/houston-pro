import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopIcon({ iconName = "laptop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}