import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mayanPyramidIcon({ iconName = "mayan-pyramid", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}