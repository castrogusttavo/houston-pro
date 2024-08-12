import React from 'react'
import { Icon, IconProps } from '../Icon'

export function drawingModeIcon({ iconName = "drawing-mode", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}