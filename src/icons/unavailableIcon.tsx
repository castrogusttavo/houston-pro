import React from 'react'
import { Icon, IconProps } from '../Icon'

export function unavailableIcon({ iconName = "unavailable", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}