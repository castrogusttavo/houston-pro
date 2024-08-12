import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cpuIcon({ iconName = "cpu", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}