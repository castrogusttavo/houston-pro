import React from 'react'
import { Icon, IconProps } from '../Icon'

export function speaker01Icon({ iconName = "speaker01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}