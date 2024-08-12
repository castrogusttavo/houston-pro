import React from 'react'
import { Icon, IconProps } from '../Icon'

export function scooter01Icon({ iconName = "scooter01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}