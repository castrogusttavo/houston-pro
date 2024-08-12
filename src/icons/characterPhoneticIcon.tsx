import React from 'react'
import { Icon, IconProps } from '../Icon'

export function characterPhoneticIcon({ iconName = "character-phonetic", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}