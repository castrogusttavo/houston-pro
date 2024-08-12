import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hangoutIcon({ iconName = "hangout", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}