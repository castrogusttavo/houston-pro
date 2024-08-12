import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bone01Icon({ iconName = "bone01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}