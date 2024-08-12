import React from 'react'
import { Icon, IconProps } from '../Icon'

export function building01Icon({ iconName = "building01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}