import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookmarkMinus01Icon({
  iconName = 'bookmark-minus01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
