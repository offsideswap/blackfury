import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Params } from "./module/types/blackfury/vesting/v1/genesis"
import { AllocationAmounts } from "./module/types/blackfury/vesting/v1/genesis"
import { AllocationAddresses } from "./module/types/blackfury/vesting/v1/genesis"
import { Airdrop } from "./module/types/blackfury/vesting/v1/vesting"


export { Params, AllocationAmounts, AllocationAddresses, Airdrop };

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
				Airdrops: {},
				Airdrop: {},
				Params: {},
				AddAirdrops: {},
				ExecuteAirdrops: {},
				SetAllocationAddress: {},
				
				_Structure: {
						Params: getStructure(Params.fromPartial({})),
						AllocationAmounts: getStructure(AllocationAmounts.fromPartial({})),
						AllocationAddresses: getStructure(AllocationAddresses.fromPartial({})),
						Airdrop: getStructure(Airdrop.fromPartial({})),
						
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
				getAirdrops: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Airdrops[JSON.stringify(params)] ?? {}
		},
				getAirdrop: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Airdrop[JSON.stringify(params)] ?? {}
		},
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getAddAirdrops: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AddAirdrops[JSON.stringify(params)] ?? {}
		},
				getExecuteAirdrops: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ExecuteAirdrops[JSON.stringify(params)] ?? {}
		},
				getSetAllocationAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SetAllocationAddress[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: blackfury.vesting.v1 initialized!')
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
		
		
		
		 		
		
		
		async QueryAirdrops({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAirdrops(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryAirdrops({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Airdrops', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAirdrops', payload: { options: { all }, params: {...key},query }})
				return getters['getAirdrops']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAirdrops API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAirdrop({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAirdrop( key.target_addr, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryAirdrop( key.target_addr, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Airdrop', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAirdrop', payload: { options: { all }, params: {...key},query }})
				return getters['getAirdrop']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAirdrop API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async MsgAddAirdrops({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgAddAirdrops(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgAddAirdrops({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AddAirdrops', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgAddAirdrops', payload: { options: { all }, params: {...key},query }})
				return getters['getAddAirdrops']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgAddAirdrops API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgExecuteAirdrops({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgExecuteAirdrops(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgExecuteAirdrops({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ExecuteAirdrops', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgExecuteAirdrops', payload: { options: { all }, params: {...key},query }})
				return getters['getExecuteAirdrops']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgExecuteAirdrops API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgSetAllocationAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgSetAllocationAddress(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgSetAllocationAddress({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SetAllocationAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgSetAllocationAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getSetAllocationAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgSetAllocationAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSetAllocationAddress({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetAllocationAddress(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetAllocationAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetAllocationAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddAirdrops({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddAirdrops(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddAirdrops:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddAirdrops:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExecuteAirdrops({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExecuteAirdrops(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExecuteAirdrops:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExecuteAirdrops:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSetAllocationAddress({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetAllocationAddress(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetAllocationAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetAllocationAddress:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddAirdrops({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddAirdrops(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddAirdrops:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddAirdrops:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExecuteAirdrops({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExecuteAirdrops(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExecuteAirdrops:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExecuteAirdrops:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
