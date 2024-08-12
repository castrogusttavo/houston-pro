import React from 'react'
import { Icon, IconProps } from '../Icon'

export function settings01Icon({ iconName = "settings01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}