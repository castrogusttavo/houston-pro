import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userSharingIcon({ iconName = "user-sharing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}