import sqlite3 from 'sqlite3'

export const db_conn = new sqlite3.Database('./server/db.sqlite', (err) => {
    if (err) console.log('Database connection error:', err.message)
})

// init if not exist
function initDB() {
    db_conn.exec(`
        CREATE TABLE IF NOT EXISTS BetGroup (
        group_pin TEXT NOT NULL,
        is_inactive BOOLEAN DEFAULT 0 NOT NULL,
        PRIMARY KEY (group_pin)
        );

        CREATE TABLE IF NOT EXISTS User (
        user_id TEXT NOT NULL,
        user_name TEXT NOT NULL,
        group_pin TEXT NOT NULL,
        PRIMARY KEY (user_id),
        FOREIGN KEY (group_pin) REFERENCES BetGroup(group_pin) ON DELETE RESTRICT
        );

        CREATE TABLE IF NOT EXISTS Token (
        token TEXT NOT NULL,
        user_id TEXT NOT NULL,
        PRIMARY KEY (token),
        FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS Bet (
        bet_id INTEGER PRIMARY KEY AUTOINCREMENT,
        bet_name TEXT NOT NULL,
        group_pin TEXT NOT NULL,
        bet_closed BOOLEAN DEFAULT 0 NOT NULL,
        bet_opened_by TEXT NOT NULL,
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
        PRIMARY KEY (user_id,choice_id),
        FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
        FOREIGN KEY (choice_id) REFERENCES Choice(choice_id) ON DELETE CASCADE
        );
        `)
}
