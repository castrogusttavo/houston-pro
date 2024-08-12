import React from 'react'
import { Icon, IconProps } from '../Icon'

export function optionIcon({ iconName = "option", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}