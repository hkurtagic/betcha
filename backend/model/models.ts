export interface Group {
    pin: string
    isActive: boolean
}
export interface User {
    user_id: string
    name: string
    groupPin: string
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