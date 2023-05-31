import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Params } from "./module/types/blackfury/maker/v1/genesis"
import { BackingRiskParams } from "./module/types/blackfury/maker/v1/maker"
import { CollateralRiskParams } from "./module/types/blackfury/maker/v1/maker"
import { RegisterBackingProposal } from "./module/types/blackfury/maker/v1/maker"
import { RegisterCollateralProposal } from "./module/types/blackfury/maker/v1/maker"
import { SetBackingRiskParamsProposal } from "./module/types/blackfury/maker/v1/maker"
import { SetCollateralRiskParamsProposal } from "./module/types/blackfury/maker/v1/maker"
import { BatchBackingRiskParams } from "./module/types/blackfury/maker/v1/maker"
import { BatchSetBackingRiskParamsProposal } from "./module/types/blackfury/maker/v1/maker"
import { BatchCollateralRiskParams } from "./module/types/blackfury/maker/v1/maker"
import { BatchSetCollateralRiskParamsProposal } from "./module/types/blackfury/maker/v1/maker"
import { TotalBacking } from "./module/types/blackfury/maker/v1/maker"
import { PoolBacking } from "./module/types/blackfury/maker/v1/maker"
import { AccountBacking } from "./module/types/blackfury/maker/v1/maker"
import { TotalCollateral } from "./module/types/blackfury/maker/v1/maker"
import { PoolCollateral } from "./module/types/blackfury/maker/v1/maker"
import { AccountCollateral } from "./module/types/blackfury/maker/v1/maker"


export { Params, BackingRiskParams, CollateralRiskParams, RegisterBackingProposal, RegisterCollateralProposal, SetBackingRiskParamsProposal, SetCollateralRiskParamsProposal, BatchBackingRiskParams, BatchSetBackingRiskParamsProposal, BatchCollateralRiskParams, BatchSetCollateralRiskParamsProposal, TotalBacking, PoolBacking, AccountBacking, TotalCollateral, PoolCollateral, AccountCollateral };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				AllBackingRiskParams: {},
				AllCollateralRiskParams: {},
				AllBackingPools: {},
				AllCollateralPools: {},
				BackingPool: {},
				CollateralPool: {},
				CollateralOfAccount: {},
				TotalBacking: {},
				TotalCollateral: {},
				BackingRatio: {},
				Params: {},
				EstimateMintBySwapIn: {},
				EstimateMintBySwapOut: {},
				EstimateBurnBySwapIn: {},
				EstimateBurnBySwapOut: {},
				EstimateBuyBackingIn: {},
				EstimateBuyBackingOut: {},
				EstimateSellBackingIn: {},
				EstimateSellBackingOut: {},
				MintBySwap: {},
				BurnBySwap: {},
				BuyBacking: {},
				SellBacking: {},
				MintByCollateral: {},
				BurnByCollateral: {},
				DepositCollateral: {},
				RedeemCollateral: {},
				LiquidateCollateral: {},
				
				_Structure: {
						Params: getStructure(Params.fromPartial({})),
						BackingRiskParams: getStructure(BackingRiskParams.fromPartial({})),
						CollateralRiskParams: getStructure(CollateralRiskParams.fromPartial({})),
						RegisterBackingProposal: getStructure(RegisterBackingProposal.fromPartial({})),
						RegisterCollateralProposal: getStructure(RegisterCollateralProposal.fromPartial({})),
						SetBackingRiskParamsProposal: getStructure(SetBackingRiskParamsProposal.fromPartial({})),
						SetCollateralRiskParamsProposal: getStructure(SetCollateralRiskParamsProposal.fromPartial({})),
						BatchBackingRiskParams: getStructure(BatchBackingRiskParams.fromPartial({})),
						BatchSetBackingRiskParamsProposal: getStructure(BatchSetBackingRiskParamsProposal.fromPartial({})),
						BatchCollateralRiskParams: getStructure(BatchCollateralRiskParams.fromPartial({})),
						BatchSetCollateralRiskParamsProposal: getStructure(BatchSetCollateralRiskParamsProposal.fromPartial({})),
						TotalBacking: getStructure(TotalBacking.fromPartial({})),
						PoolBacking: getStructure(PoolBacking.fromPartial({})),
						AccountBacking: getStructure(AccountBacking.fromPartial({})),
						TotalCollateral: getStructure(TotalCollateral.fromPartial({})),
						PoolCollateral: getStructure(PoolCollateral.fromPartial({})),
						AccountCollateral: getStructure(AccountCollateral.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getAllBackingRiskParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllBackingRiskParams[JSON.stringify(params)] ?? {}
		},
				getAllCollateralRiskParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllCollateralRiskParams[JSON.stringify(params)] ?? {}
		},
				getAllBackingPools: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllBackingPools[JSON.stringify(params)] ?? {}
		},
				getAllCollateralPools: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllCollateralPools[JSON.stringify(params)] ?? {}
		},
				getBackingPool: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BackingPool[JSON.stringify(params)] ?? {}
		},
				getCollateralPool: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CollateralPool[JSON.stringify(params)] ?? {}
		},
				getCollateralOfAccount: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CollateralOfAccount[JSON.stringify(params)] ?? {}
		},
				getTotalBacking: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalBacking[JSON.stringify(params)] ?? {}
		},
				getTotalCollateral: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalCollateral[JSON.stringify(params)] ?? {}
		},
				getBackingRatio: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BackingRatio[JSON.stringify(params)] ?? {}
		},
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getEstimateMintBySwapIn: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateMintBySwapIn[JSON.stringify(params)] ?? {}
		},
				getEstimateMintBySwapOut: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateMintBySwapOut[JSON.stringify(params)] ?? {}
		},
				getEstimateBurnBySwapIn: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateBurnBySwapIn[JSON.stringify(params)] ?? {}
		},
				getEstimateBurnBySwapOut: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateBurnBySwapOut[JSON.stringify(params)] ?? {}
		},
				getEstimateBuyBackingIn: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateBuyBackingIn[JSON.stringify(params)] ?? {}
		},
				getEstimateBuyBackingOut: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateBuyBackingOut[JSON.stringify(params)] ?? {}
		},
				getEstimateSellBackingIn: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateSellBackingIn[JSON.stringify(params)] ?? {}
		},
				getEstimateSellBackingOut: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstimateSellBackingOut[JSON.stringify(params)] ?? {}
		},
				getMintBySwap: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MintBySwap[JSON.stringify(params)] ?? {}
		},
				getBurnBySwap: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BurnBySwap[JSON.stringify(params)] ?? {}
		},
				getBuyBacking: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BuyBacking[JSON.stringify(params)] ?? {}
		},
				getSellBacking: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SellBacking[JSON.stringify(params)] ?? {}
		},
				getMintByCollateral: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MintByCollateral[JSON.stringify(params)] ?? {}
		},
				getBurnByCollateral: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BurnByCollateral[JSON.stringify(params)] ?? {}
		},
				getDepositCollateral: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DepositCollateral[JSON.stringify(params)] ?? {}
		},
				getRedeemCollateral: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RedeemCollateral[JSON.stringify(params)] ?? {}
		},
				getLiquidateCollateral: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.LiquidateCollateral[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: blackfury.maker.v1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryAllBackingRiskParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAllBackingRiskParams()).data
				
					
				commit('QUERY', { query: 'AllBackingRiskParams', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllBackingRiskParams', payload: { options: { all }, params: {...key},query }})
				return getters['getAllBackingRiskParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllBackingRiskParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllCollateralRiskParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAllCollateralRiskParams()).data
				
					
				commit('QUERY', { query: 'AllCollateralRiskParams', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllCollateralRiskParams', payload: { options: { all }, params: {...key},query }})
				return getters['getAllCollateralRiskParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllCollateralRiskParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllBackingPools({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAllBackingPools()).data
				
					
				commit('QUERY', { query: 'AllBackingPools', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllBackingPools', payload: { options: { all }, params: {...key},query }})
				return getters['getAllBackingPools']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllBackingPools API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllCollateralPools({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAllCollateralPools()).data
				
					
				commit('QUERY', { query: 'AllCollateralPools', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllCollateralPools', payload: { options: { all }, params: {...key},query }})
				return getters['getAllCollateralPools']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllCollateralPools API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBackingPool({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBackingPool(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryBackingPool({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BackingPool', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBackingPool', payload: { options: { all }, params: {...key},query }})
				return getters['getBackingPool']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBackingPool API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCollateralPool({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCollateralPool(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCollateralPool({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CollateralPool', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCollateralPool', payload: { options: { all }, params: {...key},query }})
				return getters['getCollateralPool']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCollateralPool API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCollateralOfAccount({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCollateralOfAccount(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCollateralOfAccount({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CollateralOfAccount', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCollateralOfAccount', payload: { options: { all }, params: {...key},query }})
				return getters['getCollateralOfAccount']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCollateralOfAccount API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTotalBacking({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTotalBacking()).data
				
					
				commit('QUERY', { query: 'TotalBacking', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalBacking', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalBacking']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalBacking API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTotalCollateral({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTotalCollateral()).data
				
					
				commit('QUERY', { query: 'TotalCollateral', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalCollateral', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalCollateral']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalCollateral API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBackingRatio({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBackingRatio()).data
				
					
				commit('QUERY', { query: 'BackingRatio', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBackingRatio', payload: { options: { all }, params: {...key},query }})
				return getters['getBackingRatio']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBackingRatio API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateMintBySwapIn({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateMintBySwapIn(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateMintBySwapIn({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateMintBySwapIn', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateMintBySwapIn', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateMintBySwapIn']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateMintBySwapIn API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateMintBySwapOut({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateMintBySwapOut(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateMintBySwapOut({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateMintBySwapOut', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateMintBySwapOut', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateMintBySwapOut']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateMintBySwapOut API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateBurnBySwapIn({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateBurnBySwapIn(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateBurnBySwapIn({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateBurnBySwapIn', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateBurnBySwapIn', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateBurnBySwapIn']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateBurnBySwapIn API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateBurnBySwapOut({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateBurnBySwapOut(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateBurnBySwapOut({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateBurnBySwapOut', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateBurnBySwapOut', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateBurnBySwapOut']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateBurnBySwapOut API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateBuyBackingIn({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateBuyBackingIn(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateBuyBackingIn({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateBuyBackingIn', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateBuyBackingIn', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateBuyBackingIn']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateBuyBackingIn API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateBuyBackingOut({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateBuyBackingOut(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateBuyBackingOut({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateBuyBackingOut', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateBuyBackingOut', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateBuyBackingOut']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateBuyBackingOut API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateSellBackingIn({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateSellBackingIn(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateSellBackingIn({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateSellBackingIn', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateSellBackingIn', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateSellBackingIn']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateSellBackingIn API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstimateSellBackingOut({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstimateSellBackingOut(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryEstimateSellBackingOut({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EstimateSellBackingOut', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstimateSellBackingOut', payload: { options: { all }, params: {...key},query }})
				return getters['getEstimateSellBackingOut']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstimateSellBackingOut API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgMintBySwap({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgMintBySwap(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgMintBySwap({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MintBySwap', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgMintBySwap', payload: { options: { all }, params: {...key},query }})
				return getters['getMintBySwap']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgMintBySwap API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgBurnBySwap({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgBurnBySwap(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgBurnBySwap({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BurnBySwap', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgBurnBySwap', payload: { options: { all }, params: {...key},query }})
				return getters['getBurnBySwap']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgBurnBySwap API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgBuyBacking({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgBuyBacking(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgBuyBacking({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BuyBacking', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgBuyBacking', payload: { options: { all }, params: {...key},query }})
				return getters['getBuyBacking']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgBuyBacking API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgSellBacking({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgSellBacking(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgSellBacking({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SellBacking', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgSellBacking', payload: { options: { all }, params: {...key},query }})
				return getters['getSellBacking']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgSellBacking API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgMintByCollateral({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgMintByCollateral(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgMintByCollateral({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MintByCollateral', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgMintByCollateral', payload: { options: { all }, params: {...key},query }})
				return getters['getMintByCollateral']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgMintByCollateral API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgBurnByCollateral({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgBurnByCollateral(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgBurnByCollateral({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BurnByCollateral', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgBurnByCollateral', payload: { options: { all }, params: {...key},query }})
				return getters['getBurnByCollateral']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgBurnByCollateral API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgDepositCollateral({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgDepositCollateral(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgDepositCollateral({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DepositCollateral', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgDepositCollateral', payload: { options: { all }, params: {...key},query }})
				return getters['getDepositCollateral']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgDepositCollateral API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgRedeemCollateral({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgRedeemCollateral(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgRedeemCollateral({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RedeemCollateral', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgRedeemCollateral', payload: { options: { all }, params: {...key},query }})
				return getters['getRedeemCollateral']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgRedeemCollateral API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgLiquidateCollateral({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgLiquidateCollateral(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgLiquidateCollateral({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'LiquidateCollateral', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgLiquidateCollateral', payload: { options: { all }, params: {...key},query }})
				return getters['getLiquidateCollateral']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgLiquidateCollateral API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgRedeemCollateral({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRedeemCollateral(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRedeemCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRedeemCollateral:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgMintByCollateral({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMintByCollateral(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMintByCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMintByCollateral:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgMintBySwap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMintBySwap(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMintBySwap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMintBySwap:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBuyBacking({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBuyBacking(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBuyBacking:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBuyBacking:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDepositCollateral({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDepositCollateral(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDepositCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDepositCollateral:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBurnBySwap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBurnBySwap(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBurnBySwap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBurnBySwap:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgLiquidateCollateral({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgLiquidateCollateral(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLiquidateCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLiquidateCollateral:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSellBacking({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSellBacking(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSellBacking:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSellBacking:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBurnByCollateral({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBurnByCollateral(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBurnByCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBurnByCollateral:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgRedeemCollateral({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRedeemCollateral(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRedeemCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRedeemCollateral:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgMintByCollateral({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMintByCollateral(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMintByCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMintByCollateral:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgMintBySwap({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMintBySwap(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMintBySwap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMintBySwap:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBuyBacking({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBuyBacking(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBuyBacking:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBuyBacking:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDepositCollateral({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDepositCollateral(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDepositCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDepositCollateral:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBurnBySwap({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBurnBySwap(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBurnBySwap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBurnBySwap:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgLiquidateCollateral({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgLiquidateCollateral(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLiquidateCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLiquidateCollateral:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSellBacking({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSellBacking(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSellBacking:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSellBacking:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBurnByCollateral({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBurnByCollateral(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBurnByCollateral:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBurnByCollateral:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
