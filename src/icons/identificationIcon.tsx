import React from 'react'
import { Icon, IconProps } from '../Icon'

export function identificationIcon({ iconName = "identification", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}