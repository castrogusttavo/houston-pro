import React from 'react'
import { Icon, IconProps } from '../Icon'

export function signLanguageCIcon({ iconName = "sign-language-c", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}