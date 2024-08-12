import React from 'react'
import { Icon, IconProps } from '../Icon'

export function passportIcon({ iconName = "passport", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}