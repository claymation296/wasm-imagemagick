

import utils from './utils.js';


const _llvm_exp2_f64 = x => Math.pow(2, x);

const _llvm_log10_f64 = x => Math.log(x) / Math.LN10;

const _llvm_trap = () => {
	utils.abort('trap!');
};


export default {
	_llvm_exp2_f64,
	_llvm_log10_f64,
	_llvm_trap,
};
