import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ellipseSelectionIcon({ iconName = "ellipse-selection", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}