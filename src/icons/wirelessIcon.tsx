import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wirelessIcon({ iconName = "wireless", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}