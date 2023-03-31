// import {HandySvg} from 'handy-svg';

// import Worker from "worker-loader!~/worker_dir/worker_3d.js";

import cash from 'cash-dom'




export default (_, inject) => {
  inject('cash', (ele)=> {
    return cash(ele)
  });
  // inject('worker', {
  //   createWorker () {
  //     return new Worker()
  //   }
  // });


}
