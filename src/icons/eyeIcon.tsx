import React from 'react'
import { Icon, IconProps } from '../Icon'

export function eyeIcon({ iconName = "eye", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}