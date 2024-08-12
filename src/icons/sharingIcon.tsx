import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sharingIcon({ iconName = "sharing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}