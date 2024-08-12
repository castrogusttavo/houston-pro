import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hairDryerIcon({ iconName = "hair-dryer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}