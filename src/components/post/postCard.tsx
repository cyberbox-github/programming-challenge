import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Typography } from '@styled/typography'
import { Post } from '@types'
import { Button } from '@styled/button'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2px;
  padding: 1.25rem 2.5rem;
  color: ${(props) => props.theme.primaryText};
  border: 1px solid ${(props) => props.theme.border};
  box-shadow: 2px 2px 2px ${(props) => props.theme.border};

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`

const DetailButton = styled(Button)`
  font-size: 0.625rem;
  padding: 0.375rem 0.625rem;
  margin: 0 auto;
  margin-top: 2rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 240px;
  }
`

export const PostCard = ({ post }: { post: Post }) => {
  const router = useRouter()

  const handleGoDetail = () => router.push(`/post/view/${post.id}`)

  return (
    <PostContainer>
      <Typography.HEAD>{post.title}</Typography.HEAD>
      <Typography.Detail>{new Date(post.date).toLocaleDateString()}</Typography.Detail>
      <Typography.Detail>{post.summary}</Typography.Detail>
      <DetailButton onClick={handleGoDetail}>View Detail</DetailButton>
    </PostContainer>
  )
}
