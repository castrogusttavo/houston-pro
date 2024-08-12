import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mouse18Icon({ iconName = "mouse18", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}