export interface Group {
    pin: string
    isActive: boolean
    bets?: Bet[] // why in group?
}
export interface User {
    id: string
    name: string
    group: Group
}
export interface UserToken {
    id: string
    token: string
}
export interface Bet {
    id: string
    name: string
    isClosed: boolean
    openedBy: User
    choices: Choice[]
}
export interface Choice {
    id: string
    text: string
    winningChoice: boolean
    betStake: BetStake[]
}
export interface BetStake {
    user: User
    amount: number
}

// Express
export interface ErrorResponse {
    error: true
    status: number
    message: string
}

export interface Response {
    error: false
    status: number
    message: string
}
