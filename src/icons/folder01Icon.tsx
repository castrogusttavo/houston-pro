import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folder01Icon({ iconName = "folder01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}