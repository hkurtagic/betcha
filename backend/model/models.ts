export type Group = {
    pin: string
    isActive: boolean
    // Relations are typically optional in base types, or an array if a list relation.
    // When fetching, you'd use `include` to load these.
    User?: User[] // Represents the list of Users belonging to this Group
}

export type User = {
    user_id: string
    name: string
    groupPin: string // Foreign key for the Group relation
    group?: Group | null // The related Group object (optional relation)
    UserToken?: UserToken[] // List of UserTokens for this User
    Bet?: Bet[] // List of Bets opened by this User
    BetStake?: BetStake[] // List of BetStakes made by this User
}

export type UserToken = {
    user_id: string // This is both the ID and a foreign key to User
    token: string
    User?: User // The related User object
}

export type Bet = {
    bet_id: string // Note: You had Int in one schema, String in the other. Using String from your latest.
    name: string
    isClosed: boolean
    user_id: string // Foreign key for the openedBy User relation
    openedBy?: User // The related User object
    choices?: Choice[] // List of Choices for this Bet (required, as per latest schema)
    BetStake?: BetStake[] // List of BetStakes for this Bet
}

export type Choice = {
    choice_id: string // Note: You had Int in one schema, String in the other. Using String from your latest.
    text: string
    winningChoice: boolean
    bet_id: string // Foreign key for the Bet relation
    Bet?: Bet | null // The related Bet object (optional relation)
    BetStake?: BetStake[] // List of BetStakes for this Choice
}

export type BetStake = {
    user_id: string // Part of composite ID, and foreign key to User
    choice_id: string // Part of composite ID, and foreign key to Choice
    bet_id: string // Part of composite ID, and foreign key to Bet
    amount: number
    User?: User // The related User object
    Bet?: Bet // The related Bet object
    Choice?: Choice // The related Choice object
}
