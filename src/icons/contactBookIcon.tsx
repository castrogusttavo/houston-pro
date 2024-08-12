import React from 'react'
import { Icon, IconProps } from '../Icon'

export function contactBookIcon({ iconName = "contact-book", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}