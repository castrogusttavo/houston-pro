import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sketchIcon({ iconName = "sketch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}