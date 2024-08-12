import React from 'react'
import { Icon, IconProps } from '../Icon'

export function segmentIcon({ iconName = "segment", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}