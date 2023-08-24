import { useEffect } from 'react'
import io, { Socket } from 'socket.io-client'

import {
  SOCKET_BROADCAST_ADD_COMMENT_EVENT,
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  SOCKET_LISTEN_TO_COMMENT,
} from '@constants'
import { useSnackbar } from 'notistack'

let socket: Socket

const socketInitializer = async (received: (msg: string) => void) => {
  await fetch('/api/socket')
  socket = io()
  socket.connect()

  socket.on('connect', () => {
    console.log(SOCKET_CONNECTED)
    socket.on(SOCKET_BROADCAST_ADD_COMMENT_EVENT, (msg) => {
      received(msg)
    })
  })

  socket.on('disconnect', () => {
    console.log(SOCKET_DISCONNECTED)
  })
}

export const sendCommentSignal = (comment: string) => {
  socket.emit(SOCKET_LISTEN_TO_COMMENT, comment)
}

export default function SocketProvider() {
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    socketInitializer((msg) => enqueueSnackbar(msg, { variant: 'info' }))

    return () => {
      if (socket) socket.close()
    }
  }, [])

  return null
}
