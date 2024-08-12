import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartPhoneLandscapeIcon({ iconName = "smart-phone-landscape", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}