import React from 'react'
import { Icon, IconProps } from '../Icon'

export function passportValidIcon({ iconName = "passport-valid", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}