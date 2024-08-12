import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rainDoubleDropIcon({ iconName = "rain-double-drop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}