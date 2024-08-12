import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wellnessIcon({ iconName = "wellness", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}