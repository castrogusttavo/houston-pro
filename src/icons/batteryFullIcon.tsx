import React from 'react'
import { Icon, IconProps } from '../Icon'

export function batteryFullIcon({ iconName = "battery-full", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}