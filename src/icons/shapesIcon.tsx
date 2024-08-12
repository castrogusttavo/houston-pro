import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shapesIcon({ iconName = "shapes", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}