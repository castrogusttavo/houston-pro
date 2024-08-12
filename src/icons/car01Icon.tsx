import React from 'react'
import { Icon, IconProps } from '../Icon'

export function car01Icon({ iconName = "car01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}