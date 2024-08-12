import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moonFastWindIcon({ iconName = "moon-fast-wind", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}