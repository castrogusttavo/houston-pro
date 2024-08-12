import React from 'react'
import { Icon, IconProps } from '../Icon'

export function trafficLightIcon({ iconName = "traffic-light", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}