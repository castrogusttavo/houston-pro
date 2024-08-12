import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vimeoIcon({ iconName = "vimeo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}