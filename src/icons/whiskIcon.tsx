import React from 'react'
import { Icon, IconProps } from '../Icon'

export function whiskIcon({ iconName = "whisk", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}