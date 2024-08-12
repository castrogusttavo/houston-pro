import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Svg01Icon({ iconName = "svg01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}