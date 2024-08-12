import React from 'react'
import { Icon, IconProps } from '../Icon'

export function select01Icon({ iconName = "select01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}