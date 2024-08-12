import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alert01Icon({ iconName = "alert01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}