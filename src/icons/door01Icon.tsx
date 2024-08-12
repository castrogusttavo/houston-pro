import React from 'react'
import { Icon, IconProps } from '../Icon'

export function door01Icon({ iconName = "door01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}