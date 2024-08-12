import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tap03Icon({ iconName = "tap03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}