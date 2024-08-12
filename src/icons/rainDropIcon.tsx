import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rainDropIcon({ iconName = "rain-drop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}