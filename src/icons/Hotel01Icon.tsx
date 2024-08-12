import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hotel01Icon({ iconName = "hotel01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}