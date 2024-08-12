import React from 'react'
import { Icon, IconProps } from '../Icon'

export function motion01Icon({ iconName = "motion01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}