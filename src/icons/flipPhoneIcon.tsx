import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flipPhoneIcon({ iconName = "flip-phone", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}