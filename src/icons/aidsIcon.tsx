import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aidsIcon({ iconName = "aids", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}