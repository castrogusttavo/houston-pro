import React from 'react'
import { Icon, IconProps } from '../Icon'

export function windTurbineIcon({ iconName = "wind-turbine", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}