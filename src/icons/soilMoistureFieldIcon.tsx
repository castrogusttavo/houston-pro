import React from 'react'
import { Icon, IconProps } from '../Icon'

export function soilMoistureFieldIcon({ iconName = "soil-moisture-field", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}