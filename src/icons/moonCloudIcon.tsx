import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moonCloudIcon({ iconName = "moon-cloud", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}