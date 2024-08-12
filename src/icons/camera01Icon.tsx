import React from 'react'
import { Icon, IconProps } from '../Icon'

export function camera01Icon({ iconName = "camera01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}