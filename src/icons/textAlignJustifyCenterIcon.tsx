import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textAlignJustifyCenterIcon({ iconName = "text-align-justify-center", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}