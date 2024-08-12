import React from 'react'
import { Icon, IconProps } from '../Icon'

export function windPower01Icon({ iconName = "wind-power01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}