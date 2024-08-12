import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chair01Icon({ iconName = "chair01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}