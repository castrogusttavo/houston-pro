import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userLock01Icon({ iconName = "user-lock01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}