import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Monocle01Icon({ iconName = "monocle01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}