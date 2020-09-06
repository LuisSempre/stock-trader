import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stock = stocks
        }
    },
    actions: {
        buyStock({commit}) {
            commit()
        },
        initStocks({commit}) {
            commit('setStocks', stocks )
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}