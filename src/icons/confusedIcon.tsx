import React from 'react'
import { Icon, IconProps } from '../Icon'

export function confusedIcon({ iconName = "confused", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}