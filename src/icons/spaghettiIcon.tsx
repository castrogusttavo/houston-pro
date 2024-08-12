import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spaghettiIcon({ iconName = "spaghetti", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}