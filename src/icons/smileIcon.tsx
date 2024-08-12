import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smileIcon({ iconName = "smile", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}