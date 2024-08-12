import React from 'react'
import { Icon, IconProps } from '../Icon'

export function asteroid01Icon({ iconName = "asteroid01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}