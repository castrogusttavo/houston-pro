import React from 'react'
import { Icon, IconProps } from '../Icon'

export function recycle01Icon({ iconName = "recycle01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}