import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thumbsUpIcon({ iconName = "thumbs-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}