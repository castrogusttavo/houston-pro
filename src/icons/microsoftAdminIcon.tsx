import React from 'react'
import { Icon, IconProps } from '../Icon'

export function microsoftAdminIcon({ iconName = "microsoft-admin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}