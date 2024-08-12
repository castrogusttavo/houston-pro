import React from 'react'
import { Icon, IconProps } from '../Icon'

export function secondBrecketIcon({ iconName = "second-brecket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}