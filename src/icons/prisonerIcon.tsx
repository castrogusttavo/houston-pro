import React from 'react'
import { Icon, IconProps } from '../Icon'

export function prisonerIcon({ iconName = "prisoner", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}