import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment'

import { Button } from '@styled/button'
import { Typography } from '@styled/typography'
import { CommentManage } from '@components/post/addCommentForm'
import { usePostContext } from '@context/PostProvider'
import { getPost } from '@services/postService'
import { Post } from '@types'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding: 32px;
  min-height: calc(100vh - 120px);
`

const CommentContainer = styled.ul`
  padding: 1.5rem 2.5rem;
  border-radius: 5px;
  box-shadow: 1px 1px 1px ${(props) => props.theme.border};
`

const EditButton = styled(Button)`
  align-self: start;
  height: 40px;
  width: 120px;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  padding: 0.375rem 1rem;
`

const AddFormCommentContainer = styled.div`
  margin-top: 2rem;
`

const BlogHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.75rem;
`

export default function PostDetail({ post }: { post: Post }) {
  const { setPost } = usePostContext()

  useEffect(() => {
    setPost(post)
  }, [post, setPost])

  return (
    <PostContainer>
      <BlogHeadContainer>
        <div>
          <Typography.HEAD style={{ marginBottom: '1rem' }}>{post.title}</Typography.HEAD>
          <Typography.Detail>{moment(post.date).format('YYYY-MM-DD')}</Typography.Detail>
        </div>

        <Link href='/post/edit'>
          <EditButton>Edit</EditButton>
        </Link>
      </BlogHeadContainer>
      <Typography.TitleHeading>Summary</Typography.TitleHeading>
      <Typography.Detail style={{ marginBottom: '1rem' }}>{post.summary}</Typography.Detail>
      <Typography.TitleHeading>Content</Typography.TitleHeading>
      <Typography.Detail>{post.content}</Typography.Detail>

      <Typography.TitleHeading style={{ marginTop: '2rem' }}>
        Comments for the blog
      </Typography.TitleHeading>
      {post.comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <Typography.Detail>{comment.content}</Typography.Detail>
        </CommentContainer>
      ))}

      <AddFormCommentContainer>
        <CommentManage post={post} />
      </AddFormCommentContainer>
    </PostContainer>
  )
}

export const getServerSideProps: GetServerSideProps<{ post: Post }> = async (context) => {
  const { post_id } = context.query

  const post = await getPost(post_id as string)

  return { props: { post } }
}
