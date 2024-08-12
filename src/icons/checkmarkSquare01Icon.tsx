import React from 'react'
import { Icon, IconProps } from '../Icon'

export function checkmarkSquare01Icon({ iconName = "checkmark-square01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}