import React from 'react'
import { Icon, IconProps } from '../Icon'

export function setup01Icon({ iconName = "setup01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}