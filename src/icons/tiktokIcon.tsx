import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tiktokIcon({ iconName = "tiktok", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}