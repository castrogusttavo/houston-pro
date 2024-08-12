import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopAddIcon({ iconName = "laptop-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}