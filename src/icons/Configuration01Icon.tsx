import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Configuration01Icon({ iconName = "configuration01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}