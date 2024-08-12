import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CommentAdd01Icon({
  iconName = 'comment-add01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
