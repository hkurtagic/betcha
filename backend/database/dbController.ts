import { Group, User } from '../model/models'
import { customLog, logLevel } from '../winston'
import { prisma } from '../main'

/**
 * @description creates a Database controller
 */
class DatabaseController {
    // #region Group
    public async createGroup(): Promise<Group> {
        return await prisma.group.create({ data: {} })
    }

    public async getGroupByPIN(group_pin: string): Promise<Group | null> {
        return await prisma.group.findUnique({
            where: {
                pin: group_pin,
            },
        })
    }
    /*
    public async setGroupAsInactive(group_pin: string): Promise<Error | void> {
        return new Promise((resolve, reject) => {
            var sql = `UPDATE BetGroup SET isActive = 0 WHERE group_pin = ?`
            customLog(logLevel.debug, 'Database Query', sql)
            this.db.run(sql, [group_pin], function (err: Error, result: undefined) {
                if (err) reject(err)
            })
        })
    }

    public async deleteInactiveGroups(): Promise<void> {
        return new Promise((resolve, reject) => {
            var sql = `DELETE FROM BetGroup WHERE isActive = 0`
            customLog(logLevel.debug, 'Database Query', sql)
            this.db.run(sql, function (err: Error, result: undefined) {
                if (err) reject(err)
            })
        })
    }

    // Extended Group Retrievals
    public async getAllUsersInGroup(group_pin: string): Promise<User[]> {
        return new Promise((resolve, reject) => {
            var sql =
                'SELECT U.*,UT.token FROM User U ' +
                'JOIN UserToken UT on U.user_id = UT.user_id' +
                'WHERE group_pin = ? '
            customLog(logLevel.debug, 'Database Query', sql)
            this.db.all<User[]>(
                sql,
                [group_pin],
                function (err: Error, result: User[]) {
                    if (err) reject(err)
                    resolve(result)
                }
            )
        })
    }
    // #endregion Group
    */
    // #region User
    public async createUser(
        user_name: string,
        group_pin: string
    ): Promise<User> {
        return await prisma.user.create({
            data: { name: user_name, groupPin: group_pin },
        })
    }

    public async getUserByID(user_id: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { user_id: user_id } })
    }

    public async getUserByName(user_name: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { name: user_name } })
    }

    public async deleteUserByID(user_id: string): Promise<User> {
        return await prisma.user.delete({ where: { user_id: user_id } })
    }

    public async updateUsernameByID(
        user_id: string,
        user_name: string
    ): Promise<User> {
        return await prisma.user.update({
            where: { user_id: user_id },
            data: { name: user_name },
        })
    }

    public async updateUserGroupPinByID(
        user_id: string,
        group_pin: string
    ): Promise<User> {
        return await prisma.user.update({
            where: { user_id: user_id },
            data: { groupPin: group_pin },
        })
    }
    // #endregion User
    /*
    // #region UserToken
    public async createUserToken(user_id: string, token: string): Promise<void> {
        await this.db.run(`INSERT INTO Token (user_id, token) VALUES (?, ?)`, [
            user_id,
            token,
        ])
    }

    public async getUserTokenByUserID(user_id: string): Promise<UserToken | undefined> {
        return await this.db.get<UserToken>(`SELECT * FROM Token WHERE user_id = ?`, [
            user_id,
        ])
    }

    public async getUserIDByUserToken(token: string): Promise<UserToken | undefined> {
        return await this.db.get<UserToken>(`SELECT * FROM Token WHERE token = ?`, [
            token,
        ])
    }

    public async updateUserToken(token: string): Promise<void> {
        await this.db.run(`UPDATE Token SET token = ? WHERE token = ?`, [token, token])
    }
    // #endregion UserToken

    // #region Bet
    public async createBet(
        bet_name: string,
        group_pin: string,
        bet_opener: string
    ): Promise<void> {
        await this.db.run(
            `INSERT INTO Bet (bet_name, group_pin, bet_opened_by) VALUES (?, ?, ?)`,
            [bet_name, group_pin, bet_opener]
        )
    }

    public async getBetsInGroup(group_pin: string): Promise<Bet[]> {
        return await this.db.all<Bet[]>(`SELECT * FROM Bet WHERE group_pin = ?`, [
            group_pin,
        ])
    }

    public async closeBet(bet_id: number): Promise<void> {
        await this.db.run(`UPDATE Bet SET bet_closed = 1 WHERE bet_id = ?`, [bet_id])
    }

    public async getWinningChoiceOfBet(bet_id: number): Promise<string | undefined> {
        const result = await this.db.get<{ choice_id: string }>(
            `SELECT choice_id FROM Choice WHERE bet_id = ? AND winning_choice = 1`,
            [bet_id]
        )
        return result?.choice_id
    }

    public async getUsersInBet(bet_id: number): Promise<User[]> {
        return await this.db.all<User[]>(
            `SELECT DISTINCT U.* FROM BetStake BS JOIN User U ON U.user_id = BS.user_id WHERE BS.bet_id = ?`,
            [bet_id]
        )
    }
    // #region BetStakes
    public async getBetStakes(bet_id: string): Promise<BetStake[]> {
        return await this.db.all<BetStake[]>(
            `SELECT * FROM BetStake WHERE bet_id = ?`,
            [bet_id]
        )
    }

    public async getStakesOnChoice(choice_id: string): Promise<ChoiceStake[]> {
        return await this.db.all<ChoiceStake[]>(
            `SELECT choice_id, SUM(amount) as total_amount FROM BetStake WHERE choice_id = ? GROUP BY choice_id`,
            [choice_id]
        )
    }

    public async setBetStake(
        bet_id: string,
        choice_id: string,
        user_id: string,
        amount: number
    ): Promise<void> {
        await this.db.run(
            `INSERT INTO BetStake (bet_id, choice_id, user_id, amount) VALUES (?, ?, ?, ?)`,
            [bet_id, choice_id, user_id, amount]
        )
    }

    public async editBetStake(
        choice_id: string,
        user_id: string,
        amount: number
    ): Promise<void> {
        await this.db.run(
            `UPDATE BetStake SET amount = ? WHERE user_id = ? AND choice_id = ?`,
            [amount, user_id, choice_id]
        )
    }
    // #endregion BetStakes
    // #endregion Bet
}

//#region DB initialisation
async function initDB(db: Database): Promise<void> {
    // add db version for migration
    await db.exec('PRAGMA user_version = 1')
    db.exec(`
        CREATE TABLE IF NOT EXISTS BetGroup (
        group_pin TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        isActive BOOLEAN DEFAULT 1 NOT NULL,
        PRIMARY KEY (group_pin)
        );

        CREATE TABLE IF NOT EXISTS User (
        user_id TEXT NOT NULL,
        user_name TEXT NOT NULL,
        group_pin TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id),
        FOREIGN KEY (group_pin) REFERENCES BetGroup(group_pin) ON DELETE RESTRICT,
        UNIQUE (user_name, group_pin)
        );

        CREATE TABLE IF NOT EXISTS UserToken (
        token TEXT NOT NULL,
        user_id TEXT NOT NULL,
        expires_at DATETIME NOT NULL,
        PRIMARY KEY (token),
        FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS Bet (
        bet_id INTEGER PRIMARY KEY AUTOINCREMENT,
        bet_name TEXT NOT NULL,
        group_pin TEXT NOT NULL,
        bet_closed BOOLEAN DEFAULT 0 NOT NULL,
        bet_opened_by TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (bet_opened_by) REFERENCES User(user_id) ON DELETE CASCADE,
        FOREIGN KEY (group_pin) REFERENCES BetGroup(group_pin) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS Choice (
        choice_id TEXT NOT NULL,
        choice_text TEXT NOT NULL,
        winning_choice BOOLEAN DEFAULT 0 NOT NULL,
        bet_id INTEGER NOT NULL,
        PRIMARY KEY (choice_id, bet_id),
        FOREIGN KEY (bet_id) REFERENCES Bet(bet_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS BetStake (
        user_id TEXT NOT NULL,
        choice_id TEXT NOT NULL,
        amount NUMERIC NOT NULL,
        bet_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id, choice_id, bet_id),
        FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
        FOREIGN KEY (choice_id, bet_id) REFERENCES Choice(choice_id, bet_id) ON DELETE CASCADE
        );
        `)
    //#region DB triggers
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS update_user_updated_at
        AFTER UPDATE ON User
        FOR EACH ROW
        BEGIN
            UPDATE User
            SET updated_at = CURRENT_TIMESTAMP
            WHERE user_id = OLD.user_id;
        END;

        CREATE TRIGGER IF NOT EXISTS update_bet_updated_at
        AFTER UPDATE ON Bet
        FOR EACH ROW
        BEGIN
            UPDATE Bet
            SET updated_at = CURRENT_TIMESTAMP
            WHERE bet_id = OLD.bet_id;
        END;

        CREATE TRIGGER IF NOT EXISTS update_betstake_updated_at
        AFTER UPDATE ON BetStake
        FOR EACH ROW
        BEGIN
            UPDATE BetStake
            SET updated_at = CURRENT_TIMESTAMP
            WHERE user_id = OLD.user_id AND choice_id = OLD.choice_id AND bet_id = OLD.bet_id;
        END;
        `)
    //#endregion DB triggers
    */
}
//#endregion DB initialisation

export const databaseController = new DatabaseController()
