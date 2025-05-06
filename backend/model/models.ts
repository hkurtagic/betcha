export interface Group {
    pin: string
    isActive: boolean
    bets?: Bet[] // why in group?
}
export interface User {
    id: string
    name: string
    group: Group
    token: UserToken
}
export interface UserToken {
    id: string
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
