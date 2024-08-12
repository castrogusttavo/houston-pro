import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse13Icon({ iconName = "mouse13", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}