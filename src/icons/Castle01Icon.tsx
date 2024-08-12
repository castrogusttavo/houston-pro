import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Castle01Icon({ iconName = "castle01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}