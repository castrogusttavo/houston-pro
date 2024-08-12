import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CommentBlock01Icon({
  iconName = 'comment-block01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
