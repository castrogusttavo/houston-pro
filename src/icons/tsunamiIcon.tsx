import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tsunamiIcon({ iconName = "tsunami", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}