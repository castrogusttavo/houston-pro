import React from 'react'
import { Icon, IconProps } from '../Icon'

export function imageCompositionIcon({ iconName = "image-composition", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}