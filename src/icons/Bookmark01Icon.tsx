import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bookmark01Icon({
  iconName = 'bookmark01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
