import React from 'react'
import { Icon, IconProps } from '../Icon'

export function guestHouseIcon({ iconName = "guest-house", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}