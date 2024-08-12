import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textFootnoteIcon({ iconName = "text-footnote", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}