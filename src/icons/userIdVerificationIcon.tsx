import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userIdVerificationIcon({ iconName = "user-id-verification", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}