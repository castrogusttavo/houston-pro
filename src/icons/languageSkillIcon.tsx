import React from 'react'
import { Icon, IconProps } from '../Icon'

export function languageSkillIcon({ iconName = "language-skill", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}