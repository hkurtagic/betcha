package com.example.betcha.model

import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import jakarta.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

data class Bet(
    val id: String,
    val text: String,
    val isActive: Boolean,
    val potSize: Int,
    val selections: List<Selection>,
    val myBet: MyBet? = null,
    val concludedInfo: ConcludedInfo? = null
)

data class Selection(
    val id: String,
    val label: String,
    val percentage: Float // from 0 to 100
)

data class MyBet(
    val selectionId: String,
    val amount: Int
)

data class ConcludedInfo(
    val winners: List<Winner>,
    val didWin: Boolean,
    val winnings: Int
)

data class Winner(
    val userName: String,
    val amount: Int
)


@HiltViewModel
class BetViewModel @Inject constructor(
   // private val betRepository: BetRepository
) : ViewModel() {

    private val _bets = MutableStateFlow<List<Bet>>(emptyList())
    val bets: StateFlow<List<Bet>> = _bets

    init {
//        betRepository.subscribeToBetUpdates { updatedBets ->
//            _bets.value = updatedBets
//        }
    }
}
