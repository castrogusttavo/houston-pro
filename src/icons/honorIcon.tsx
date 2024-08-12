import React from 'react'
import { Icon, IconProps } from '../Icon'

export function honorIcon({ iconName = "honor", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}