import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookmarkCheck01Icon({
  iconName = 'bookmark-check01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
