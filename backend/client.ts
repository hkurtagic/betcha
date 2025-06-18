import { io, Socket } from 'socket.io-client'
import {
    ClientToServerEvents,
    ServerToClientEvents,
} from './SocketConnectionTypes'
import { customLog, logLevel, service } from './winston'
import { User } from './model/models'
import { databaseController } from './database/dbController'
;(async () => {
    async function getName() {
        try {
            const res = await fetch(`http://localhost:8000/randomName`)
            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }
    async function createUser(name: string) {
        try {
            const res = await fetch(`http://localhost:8000/newUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: name,
                }),
            })
            const data = await res.json()

            return data
        } catch (error) {
            console.error(error)
        }
    }
    async function getUser(user_id: string) {
        try {
            const res = await fetch(`http://localhost:8000/user/` + user_id)
            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    let roomID = ''
    let myToken = ''

    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
        'http://localhost:8000'
        // { query: { myToken } }
    )
    socket.connect()
    let name: string = await getName()
    const temp = new Map()
    let user: User = await createUser(name)

    temp.set('user_id', user.user_id)
    temp.set('group_pin', user.groupPin)
    socket.emit(
        'requestJoinGroup',
        JSON.stringify(Object.fromEntries(temp)),
        (res) => {
            customLog(
                logLevel.info,
                service.websocket,
                `${res.status} ${
                    res.msg
                        ? `requestJoinGroup: ${res.msg}`
                        : 'requestJoinGroup: No message'
                }`
            )
        }
    )
    temp.clear()

    temp.set('user_id', user.user_id)
    temp.set('bet_name', 'Who wins the match?')
    temp.set('choices', ['test1', 'test2'])

    socket.emit(
        'requestCreateBet',
        JSON.stringify(Object.fromEntries(temp)),
        async (res) => {
            customLog(
                logLevel.info,
                service.websocket,
                `${res.status} ${
                    res.msg
                        ? `requestCreateBet: ${res.msg}`
                        : 'requestCreateBet: No message'
                }`
            )

            user = await getUser(user.user_id)
            console.log(user)

            temp.clear()
            temp.set('user_id', user.user_id)
            //@ts-ignore
            temp.set('choice_id', user.Bet[0].choices[0].choice_id)
            //@ts-ignore
            temp.set('bet_id', user.Bet[0].choices[0].bet_id)
            temp.set('amount', 100)
            socket.emit(
                'requestCreateBetStake',
                JSON.stringify(Object.fromEntries(temp)),
                (res) => {
                    customLog(
                        logLevel.info,
                        service.websocket,
                        `${res.status} ${
                            res.msg
                                ? `requestCreateBetStake: ${res.msg}`
                                : 'requestCreateBetStake: No message'
                        }`
                    )
                }
            )

            temp.clear()
            temp.set('user_id', user.user_id)
            //@ts-ignore
            temp.set('bet_id', user.Bet[0].choices[0].bet_id)
            socket.emit(
                'requestCloseBet',
                JSON.stringify(Object.fromEntries(temp)),
                (res) => {
                    customLog(
                        logLevel.info,
                        service.websocket,
                        `${res.status} ${
                            res.msg
                                ? `requestCloseBet: ${res.msg}`
                                : 'requestCloseBet: No message'
                        }`
                    )
                }
            )
        }
    )
    // socket.emit('newUser', 'testName1')

    // socket.on('newUserAck', (userid, roomid) => {
    //     roomID = roomid
    //     console.log(`socket: u hav id ${userid}`)
    // })

    // function a() {
    //     const socket2: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    //         'http://localhost:3000',
    //         { multiplex: false }
    //     )
    //     socket2.connect()
    //     socket2.emit('newUser', 'testName2', roomID)
    //     socket2.on('newUserAck', (userid) => {
    //         console.log(`socket2: u hav id ${userid}`)
    //         socket.close()
    //         socket2.close()
    //     })
    // }
    // setTimeout(a, 10000)

    // connection errors
    socket.on('connect_error', (err) => {
        // the reason of the error, for example "xhr poll error"
        console.log(err.message)
    })
    socket.on('disconnect', (reason) => {
        if (socket.active) {
            // temporary disconnection, the socket will automatically try to reconnect
        } else {
            // the connection was forcefully closed by the server or the client itself
            // in that case, `socket.connect()` must be manually called in order to reconnect
            console.log(reason)
        }
    })
    socket.io.on('reconnect_attempt', () => {
        // ...
    })

    socket.io.on('reconnect', () => {
        // ...
    })
})()
