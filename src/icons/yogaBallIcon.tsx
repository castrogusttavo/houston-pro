import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yogaBallIcon({ iconName = "yoga-ball", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}