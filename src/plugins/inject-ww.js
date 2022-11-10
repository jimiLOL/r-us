// import {HandySvg} from 'handy-svg';
import cash from 'cash-dom'


export default (_, inject) => {
  inject('cash', (ele)=> {
    return cash(ele)
  })


}
