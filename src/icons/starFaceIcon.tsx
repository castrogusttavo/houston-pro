import React from 'react'
import { Icon, IconProps } from '../Icon'

export function starFaceIcon({ iconName = "star-face", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}