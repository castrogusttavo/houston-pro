import React from 'react'
import { Icon, IconProps } from '../Icon'

export function floorPlanIcon({ iconName = "floor-plan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}