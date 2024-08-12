import React from 'react'
import { Icon, IconProps } from '../Icon'

export function colorPickerIcon({ iconName = "color-picker", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}