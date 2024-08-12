import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aspectRatioIcon({ iconName = "aspect-ratio", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}