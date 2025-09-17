## <code>requestJoinGroup</code> [Client -> Server]
```json
{
  "user_id": "example": "48be2808-b54c-4a05-b4f4-48385793c5cc",
  "group_pin": "example": "cmc26gzyw0000hq50i2o25nnp"
}
```
### Responses
✅
```json
{  "status": "example": 200 }
```
❌
```json
{
  "status": "example": 400,
  "msg": "example": "user_id and group_pin needed"
}
```
</br>

## <code>requestCreateBet</code> [Client -> Server]

```json
{
  "user_id": "example": "48be2808-b54c-4a05-b4f4-48385793c5cc",
  "bet_name": "example": "Who will win the next match?",
  "bet_choice": "example": [
    "Team A",
    "Team B",
    "Draw"
  ]
}
```
### Responses
✅
```json
{
  "status": "example": 200
}
```
❌
```json
{
  "status": "example": 400,
  "msg": "example": "user_id, bet_name or bet_choice not provided"
}
```
</br>

## <code>BetUpdate</code> [Client -> Server]

```json
{
  "user_id": "example": "48be2808-b54c-4a05-b4f4-48385793c5cc",
  "bet_id": "example": "b2e36474-f988-4b91-a2f0-7f199954283a",
  "name": "example": "Who will win the next match?",
  "isClosed": "example": false,
  "choices": "example": [
    {
      "choice_id": "9ba2093a-eb07-46e8-b249-03e79d27e2b2",
      "text": "Team A",
      "winningChoice": false,
      "bet_id": "b2e36474-f988-4b91-a2f0-7f199954283a"
    }
  ],
  "betStake": "example": [
    {
      "user_id": "48be2808-b54c-4a05-b4f4-48385793c5cc",
      "choice_id": "9ba2093a-eb07-46e8-b249-03e79d27e2b2",
      "bet_id": "b2e36474-f988-4b91-a2f0-7f199954283a",
      "amount": 10.5
    }
  ]
}
```
</br>

## <code>requestCreateBetStake</code> [Client -> Server]

```json
{
  "user_id": "example": "48be2808-b54c-4a05-b4f4-48385793c5cc",
  "bet_id": "example": "b2e36474-f988-4b91-a2f0-7f199954283a",
  "choice_id": "example": "9ba2093a-eb07-46e8-b249-03e79d27e2b2",
  "amount": "example": 10.5
}
```
### Response
✅
```json
{
  "status": "example": 200,
  "msg": {
    "user_id": "48be2808-b54c-4a05-b4f4-48385793c5cc",
    "choice_id": "9ba2093a-eb07-46e8-b249-03e79d27e2b2",
    "bet_id": "b2e36474-f988-4b91-a2f0-7f199954283a",
    "amount": 10.5
  }
}
```
❌
```json
{
  "status": "example": 400,
  "msg": "example": "user_id, choice_id, bet_id or amount not provided"
}
```
</br>

## <code>requestCloseBet</code> [Client -> Server]

```json
{
  "user_id": "example": "48be2808-b54c-4a05-b4f4-48385793c5cc",
  "bet_id": "example": "b2e36474-f988-4b91-a2f0-7f199954283a"
}
```

### Response
✅
```json
{
  "status": "example": 200,
  "msg": {
    "bet_id": "b2e36474-f988-4b91-a2f0-7f199954283a",
    "name": "Who will win the next match?",
    "isClosed": true,
    "user_id": "48be2808-b54c-4a05-b4f4-48385793c5cc"
  }
}
```
❌
```json
{
  "status": "example": 400,
  "msg": "example": "user_id or bet_id not provided"
}
```
</br>

## <code>requestSelectWinningChoice</code> [Client -> Server]

```json
{
  "user_id": "example": "48be2808-b54c-4a05-b4f4-48385793c5cc",
  "choice_id": "example": "9ba2093a-eb07-46e8-b249-03e79d27e2b2"
}
```
### Response
✅

```json
{
  "status": "example": 200
}
```
❌
```json
{
  "status": "example": 400,
  "msg": "example": "user_id or choice_id not provided"
}
```
</br>