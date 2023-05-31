import { txClient, queryClient, MissingWalletError , registry} from './module'

import { EventCreate } from "./module/types/blackfury/ve/v1/event"
import { EventDeposit } from "./module/types/blackfury/ve/v1/event"
import { EventExtendTime } from "./module/types/blackfury/ve/v1/event"
import { EventMerge } from "./module/types/blackfury/ve/v1/event"
import { EventWithdraw } from "./module/types/blackfury/ve/v1/event"
import { Params } from "./module/types/blackfury/ve/v1/genesis"
import { LockedBalance } from "./module/types/blackfury/ve/v1/ve"
import { Checkpoint } from "./module/types/blackfury/ve/v1/ve"


export { EventCreate, EventDeposit, EventExtendTime, EventMerge, EventWithdraw, Params, LockedBalance, Checkpoint };

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
				TotalVotingPower: {},
				VotingPower: {},
				VeNfts: {},
				VeNft: {},
				Params: {},
				Create: {},
				Deposit: {},
				ExtendTime: {},
				Merge: {},
				Withdraw: {},
				
				_Structure: {
						EventCreate: getStructure(EventCreate.fromPartial({})),
						EventDeposit: getStructure(EventDeposit.fromPartial({})),
						EventExtendTime: getStructure(EventExtendTime.fromPartial({})),
						EventMerge: getStructure(EventMerge.fromPartial({})),
						EventWithdraw: getStructure(EventWithdraw.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						LockedBalance: getStructure(LockedBalance.fromPartial({})),
						Checkpoint: getStructure(Checkpoint.fromPartial({})),
						
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
				getTotalVotingPower: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalVotingPower[JSON.stringify(params)] ?? {}
		},
				getVotingPower: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VotingPower[JSON.stringify(params)] ?? {}
		},
				getVeNfts: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VeNfts[JSON.stringify(params)] ?? {}
		},
				getVeNft: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VeNft[JSON.stringify(params)] ?? {}
		},
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getCreate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Create[JSON.stringify(params)] ?? {}
		},
				getDeposit: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Deposit[JSON.stringify(params)] ?? {}
		},
				getExtendTime: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ExtendTime[JSON.stringify(params)] ?? {}
		},
				getMerge: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Merge[JSON.stringify(params)] ?? {}
		},
				getWithdraw: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Withdraw[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: blackfury.ve.v1 initialized!')
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
		
		
		
		 		
		
		
		async QueryTotalVotingPower({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTotalVotingPower(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryTotalVotingPower({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'TotalVotingPower', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalVotingPower', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalVotingPower']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalVotingPower API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVotingPower({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVotingPower( key.ve_id, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryVotingPower( key.ve_id, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VotingPower', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVotingPower', payload: { options: { all }, params: {...key},query }})
				return getters['getVotingPower']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVotingPower API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVeNfts({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVeNfts(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryVeNfts({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VeNfts', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVeNfts', payload: { options: { all }, params: {...key},query }})
				return getters['getVeNfts']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVeNfts API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVeNft({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVeNft( key.id)).data
				
					
				commit('QUERY', { query: 'VeNft', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVeNft', payload: { options: { all }, params: {...key},query }})
				return getters['getVeNft']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVeNft API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async MsgCreate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgCreate(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgCreate({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Create', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgCreate', payload: { options: { all }, params: {...key},query }})
				return getters['getCreate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgCreate API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgDeposit({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgDeposit(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgDeposit({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Deposit', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgDeposit', payload: { options: { all }, params: {...key},query }})
				return getters['getDeposit']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgDeposit API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgExtendTime({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgExtendTime(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgExtendTime({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ExtendTime', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgExtendTime', payload: { options: { all }, params: {...key},query }})
				return getters['getExtendTime']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgExtendTime API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgMerge({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgMerge(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgMerge({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Merge', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgMerge', payload: { options: { all }, params: {...key},query }})
				return getters['getMerge']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgMerge API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgWithdraw({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgWithdraw(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgWithdraw({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Withdraw', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgWithdraw', payload: { options: { all }, params: {...key},query }})
				return getters['getWithdraw']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgWithdraw API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgDeposit({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeposit(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeposit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeposit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdraw({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdraw(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdraw:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdraw:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExtendTime({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExtendTime(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExtendTime:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExtendTime:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgMerge({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMerge(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMerge:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMerge:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgDeposit({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeposit(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeposit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeposit:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdraw({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdraw(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdraw:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdraw:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExtendTime({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExtendTime(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExtendTime:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExtendTime:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgMerge({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMerge(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMerge:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMerge:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreate:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
