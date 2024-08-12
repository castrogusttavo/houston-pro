import React from 'react'
import { Icon, IconProps } from '../Icon'

export function figmaIcon({ iconName = "figma", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}