package com.example.betcha.model

//@Singleton
//class SessionManager @Inject constructor() {
//    val sessionManager = MutableStateFlow<SessionManager>(
//        SessionManager()
//    )
//}


//@HiltViewModel
//class SessionViewModel @Inject constructor(
//    private val sessionManager: SessionManager
//) : ViewModel() {
//    private val _sessionState = sessionManager.sessionState
//    val sessionState: StateFlow<SessionState>
//        get() {
//            return _sessionState.asStateFlow()
//        }
//
//    fun updateSession(session: SessionState) {
//        _sessionState.value = session
//    }
//
//    fun clearSession() {
//        _sessionState.value = SessionState()
//    }
//}