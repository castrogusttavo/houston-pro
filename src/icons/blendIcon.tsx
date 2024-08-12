import React from 'react'
import { Icon, IconProps } from '../Icon'

export function blendIcon({ iconName = "blend", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}