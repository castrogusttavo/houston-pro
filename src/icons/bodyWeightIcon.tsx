import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bodyWeightIcon({ iconName = "body-weight", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}