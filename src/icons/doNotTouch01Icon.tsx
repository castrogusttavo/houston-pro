import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doNotTouch01Icon({ iconName = "do-not-touch01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}