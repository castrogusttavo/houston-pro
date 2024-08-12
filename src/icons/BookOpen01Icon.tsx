import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookOpen01Icon({
  iconName = 'book-open01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
