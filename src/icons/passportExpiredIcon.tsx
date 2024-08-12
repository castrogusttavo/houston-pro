import React from 'react'
import { Icon, IconProps } from '../Icon'

export function passportExpiredIcon({ iconName = "passport-expired", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}