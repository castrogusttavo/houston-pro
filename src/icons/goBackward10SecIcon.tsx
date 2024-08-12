import React from 'react'
import { Icon, IconProps } from '../Icon'

export function goBackward10SecIcon({ iconName = "go-backward10-sec", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}