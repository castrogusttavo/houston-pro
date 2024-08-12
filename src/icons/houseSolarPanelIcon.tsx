import React from 'react'
import { Icon, IconProps } from '../Icon'

export function houseSolarPanelIcon({ iconName = "house-solar-panel", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}