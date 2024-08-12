import React from 'react'
import { Icon, IconProps } from '../Icon'

export function framerIcon({ iconName = "framer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}