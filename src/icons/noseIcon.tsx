import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noseIcon({ iconName = "nose", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}