import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clapping01Icon({ iconName = "clapping01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}