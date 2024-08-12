import React from 'react'
import { Icon, IconProps } from '../Icon'

export function schoolBusIcon({ iconName = "school-bus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}