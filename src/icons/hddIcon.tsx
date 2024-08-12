import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hddIcon({ iconName = "hdd", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}