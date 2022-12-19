import { ActionTree, GetterTree, MutationTree } from "vuex";
import shopApi from "~/api/shop";
interface product {
    id: number,
    title: string,
    price: number,
    imgs: Array<String>,
    about: string
}
type type_shop = 'provaslavny' | 'mysulman' | 'kremacia';

export interface productState {
    list: product[];
    page: number;
    limit: number;
    category: string;
    type_shop: type_shop;
    load: boolean;
    filterPrice: string;
    total: number;

}

const itemList = [
    {
      title: "Товар",
      price: 1,
      about: "Описание товара",
      imgs: [
       'name', 'name'
      ],
      id: 1,
    },
    {
      title: "Товар",
      price: 1,
      about: "Описание товара",
      imgs: [
        'name', 'name'
      ],
      id: 2,
    },
    {
      title: "Товар",
      price: 1,
      about: "Описание товара",
      imgs: ['name', 'name'],
      id: 3,
    },
    {
      title: "Товар",
      price: 1,
      about: "Описание товара",
      imgs: ['name', 'name'],
      id: 4,
    },
  ];

function getDefaultState(): productState {
    return {
        list: itemList,
        page: 0,
        limit: 4,
        category: 'Grobi',
        type_shop: 'provaslavny',
        load: false,
        filterPrice: "all",
        total: 1

    }
}

export const state = getDefaultState;



export const mutations: MutationTree<productState> = {
    getProductList(state, payload) {
        state.list = payload;
      },
      setLoad(state, payload) {
        state.load = payload;
      },
      setNewFilterPrice(state, payload) {
        state.filterPrice = payload;
      },
      setCategory(state, payload) { 
        state.category = payload;
      },
      setPage(state, payload) { 
        state.page = payload;
      },
      setTypeShop(state, payload) { 
        state.type_shop = payload;
      },
      setTotal(state, payload) { 
        state.total = payload;
      }, 
      setLimit(state, payload) {  
        state.limit = payload;
      }

}

interface resResponse {
    productList: product[],
    total: number
}


export const actions: ActionTree<productState, {}> = {
    init({dispatch}) { 
        dispatch('getProductList');
    },
   async getProductList({commit, state}) {
        commit('setLoad', true);
        await shopApi.getProduct(state.category, state.page, state.limit, state.type_shop, state.filterPrice ).then((res: resResponse)=> {
            console.log(res);
            
            if (Array.isArray(res.productList)) {
              
                res.productList.forEach((item: product) => {
                    if (typeof (item as any).id_pictures == 'string' && (item as any).id_pictures.length > 0) {
                        item.imgs = (item as any).id_pictures.split(',');

                    } else {
                        item.imgs = ['1Sys-zgzAPhe-yb_5QY-kZsCTEfOmqxyC'];
                    }
                })
                commit('getProductList', res.productList);
                commit('setTotal', res.total);
                commit('setLoad', false);
            }
           
        })

    }

}


export const getters: GetterTree<productState, {}> = {
    productList(store) {
        return store.list;
      },
        loadStatus(store) {
            return store.load;
        },
        stateModal(store) {
            return {sub_tab: store.category, tab: store.type_shop, filterPrice: store.filterPrice, page: store.page, total: store.total, limit: store.limit};
        }

}
