import React from 'react'
import { Icon, IconProps } from '../Icon'

export function heartAddIcon({ iconName = "heart-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}