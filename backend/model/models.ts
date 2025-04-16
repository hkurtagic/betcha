export interface User {
    id: string
    name: string
    group: Group
    token: Token
}
export interface Group {
    pin: string
    isActive: boolean
    bets: Bet[]
}
export interface Token {
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
