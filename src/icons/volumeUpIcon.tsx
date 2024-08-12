import React from 'react'
import { Icon, IconProps } from '../Icon'

export function volumeUpIcon({ iconName = "volume-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}