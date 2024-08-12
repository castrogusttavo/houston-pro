import React from 'react'
import { Icon, IconProps } from '../Icon'

export function trafficIncidentIcon({ iconName = "traffic-incident", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}