import React from 'react'
import { Icon, IconProps } from '../Icon'

export function kickstarter01Icon({ iconName = "kickstarter01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}