import React from 'react'
import { Icon, IconProps } from '../Icon'

export function refrigeratorIcon({ iconName = "refrigerator", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}