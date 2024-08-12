import React from 'react'
import { Icon, IconProps } from '../Icon'

export function baby01Icon({ iconName = "baby01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}