import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mouse01Icon({ iconName = "mouse01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}