import React from 'react'
import { Icon, IconProps } from '../Icon'

export function drawingCompassIcon({ iconName = "drawing-compass", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}