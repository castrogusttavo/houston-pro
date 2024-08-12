import React from 'react'
import { Icon, IconProps } from '../Icon'

export function treatmentIcon({ iconName = "treatment", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}