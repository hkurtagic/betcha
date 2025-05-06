export interface User {
    user_id: string
    user_name: string
    group_pin: string
}

export interface UserToken {
    user_id: string
    token: string
}

export interface Group {
    group_pin: string
    is_inactive: boolean
}

export interface Bet {
    bet_id: number
    bet_name: string
    group_pin: string
    bet_closed: boolean
    bet_opened_by: string
}

export interface BetStake {
    user_id: string
    choice_id: string
    bet_id: number
    amount: number
}

export interface ChoiceStake {
    choice_id: string
    total_amount: number
}
