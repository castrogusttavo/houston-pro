import React from 'react'
import { Icon, IconProps } from '../Icon'

export function delete01Icon({ iconName = "delete01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}