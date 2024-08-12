import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moon01Icon({ iconName = "moon01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}