import React from 'react'
import { Icon, IconProps } from '../Icon'

export function soilTemperatureFieldIcon({ iconName = "soil-temperature-field", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}