import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bodySoapIcon({ iconName = "body-soap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}