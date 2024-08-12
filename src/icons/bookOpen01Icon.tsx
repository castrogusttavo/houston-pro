import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bookOpen01Icon({ iconName = "book-open01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}