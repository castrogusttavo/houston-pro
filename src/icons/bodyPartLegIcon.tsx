import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bodyPartLegIcon({ iconName = "body-part-leg", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}