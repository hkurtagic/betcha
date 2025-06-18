package com.example.betcha.model

import androidx.lifecycle.ViewModel
import com.example.betcha.repository.Bet
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject


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
