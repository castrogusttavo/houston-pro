import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thumbsDownIcon({ iconName = "thumbs-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}