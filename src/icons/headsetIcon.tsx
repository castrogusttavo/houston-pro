import React from 'react'
import { Icon, IconProps } from '../Icon'

export function headsetIcon({ iconName = "headset", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}