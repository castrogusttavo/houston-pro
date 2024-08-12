import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paragraphSpacingIcon({ iconName = "paragraph-spacing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}