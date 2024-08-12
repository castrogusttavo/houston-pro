import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moleculesIcon({ iconName = "molecules", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}