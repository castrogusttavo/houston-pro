import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cards01Icon({ iconName = "cards01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}