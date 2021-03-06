

const PAGE_SIZE 		 = 16384;
const WASM_PAGE_SIZE = 65536;

const ALLOC_STATIC = 2;
const STATIC_BASE  = 1024;

const PROGRAM_STRING = './this.program';

const ERRNO_CODES = {
	EPERM: 1,
	ENOENT: 2,
	ESRCH: 3,
	EINTR: 4,
	EIO: 5,
	ENXIO: 6,
	E2BIG: 7,
	ENOEXEC: 8,
	EBADF: 9,
	ECHILD: 10,
	EAGAIN: 11,
	EWOULDBLOCK: 11,
	ENOMEM: 12,
	EACCES: 13,
	EFAULT: 14,
	ENOTBLK: 15,
	EBUSY: 16,
	EEXIST: 17,
	EXDEV: 18,
	ENODEV: 19,
	ENOTDIR: 20,
	EISDIR: 21,
	EINVAL: 22,
	ENFILE: 23,
	EMFILE: 24,
	ENOTTY: 25,
	ETXTBSY: 26,
	EFBIG: 27,
	ENOSPC: 28,
	ESPIPE: 29,
	EROFS: 30,
	EMLINK: 31,
	EPIPE: 32,
	EDOM: 33,
	ERANGE: 34,
	ENOMSG: 42,
	EIDRM: 43,
	ECHRNG: 44,
	EL2NSYNC: 45,
	EL3HLT: 46,
	EL3RST: 47,
	ELNRNG: 48,
	EUNATCH: 49,
	ENOCSI: 50,
	EL2HLT: 51,
	EDEADLK: 35,
	ENOLCK: 37,
	EBADE: 52,
	EBADR: 53,
	EXFULL: 54,
	ENOANO: 55,
	EBADRQC: 56,
	EBADSLT: 57,
	EDEADLOCK: 35,
	EBFONT: 59,
	ENOSTR: 60,
	ENODATA: 61,
	ETIME: 62,
	ENOSR: 63,
	ENONET: 64,
	ENOPKG: 65,
	EREMOTE: 66,
	ENOLINK: 67,
	EADV: 68,
	ESRMNT: 69,
	ECOMM: 70,
	EPROTO: 71,
	EMULTIHOP: 72,
	EDOTDOT: 73,
	EBADMSG: 74,
	ENOTUNIQ: 76,
	EBADFD: 77,
	EREMCHG: 78,
	ELIBACC: 79,
	ELIBBAD: 80,
	ELIBSCN: 81,
	ELIBMAX: 82,
	ELIBEXEC: 83,
	ENOSYS: 38,
	ENOTEMPTY: 39,
	ENAMETOOLONG: 36,
	ELOOP: 40,
	EOPNOTSUPP: 95,
	EPFNOSUPPORT: 96,
	ECONNRESET: 104,
	ENOBUFS: 105,
	EAFNOSUPPORT: 97,
	EPROTOTYPE: 91,
	ENOTSOCK: 88,
	ENOPROTOOPT: 92,
	ESHUTDOWN: 108,
	ECONNREFUSED: 111,
	EADDRINUSE: 98,
	ECONNABORTED: 103,
	ENETUNREACH: 101,
	ENETDOWN: 100,
	ETIMEDOUT: 110,
	EHOSTDOWN: 112,
	EHOSTUNREACH: 113,
	EINPROGRESS: 115,
	EALREADY: 114,
	EDESTADDRREQ: 89,
	EMSGSIZE: 90,
	EPROTONOSUPPORT: 93,
	ESOCKTNOSUPPORT: 94,
	EADDRNOTAVAIL: 99,
	ENETRESET: 102,
	EISCONN: 106,
	ENOTCONN: 107,
	ETOOMANYREFS: 109,
	EUSERS: 87,
	EDQUOT: 122,
	ESTALE: 116,
	ENOTSUP: 95,
	ENOMEDIUM: 123,
	EILSEQ: 84,
	EOVERFLOW: 75,
	ECANCELED: 125,
	ENOTRECOVERABLE: 131,
	EOWNERDEAD: 130,
	ESTRPIPE: 86
};

const ERRNO_MESSAGES = {
	0: 'Success',
	1: 'Not super-user',
	2: 'No such file or directory',
	3: 'No such process',
	4: 'Interrupted system call',
	5: 'I/O error',
	6: 'No such device or address',
	7: 'Arg list too long',
	8: 'Exec format error',
	9: 'Bad file number',
	10: 'No children',
	11: 'No more processes',
	12: 'Not enough core',
	13: 'Permission denied',
	14: 'Bad address',
	15: 'Block device required',
	16: 'Mount device busy',
	17: 'File exists',
	18: 'Cross-device link',
	19: 'No such device',
	20: 'Not a directory',
	21: 'Is a directory',
	22: 'Invalid argument',
	23: 'Too many open files in system',
	24: 'Too many open files',
	25: 'Not a typewriter',
	26: 'Text file busy',
	27: 'File too large',
	28: 'No space left on device',
	29: 'Illegal seek',
	30: 'Read only file system',
	31: 'Too many links',
	32: 'Broken pipe',
	33: 'Math arg out of domain of func',
	34: 'Math result not representable',
	35: 'File locking deadlock error',
	36: 'File or path name too long',
	37: 'No record locks available',
	38: 'Function not implemented',
	39: 'Directory not empty',
	40: 'Too many symbolic links',
	42: 'No message of desired type',
	43: 'Identifier removed',
	44: 'Channel number out of range',
	45: 'Level 2 not synchronized',
	46: 'Level 3 halted',
	47: 'Level 3 reset',
	48: 'Link number out of range',
	49: 'Protocol driver not attached',
	50: 'No CSI structure available',
	51: 'Level 2 halted',
	52: 'Invalid exchange',
	53: 'Invalid request descriptor',
	54: 'Exchange full',
	55: 'No anode',
	56: 'Invalid request code',
	57: 'Invalid slot',
	59: 'Bad font file fmt',
	60: 'Device not a stream',
	61: 'No data (for no delay io)',
	62: 'Timer expired',
	63: 'Out of streams resources',
	64: 'Machine is not on the network',
	65: 'Package not installed',
	66: 'The object is remote',
	67: 'The link has been severed',
	68: 'Advertise error',
	69: 'Srmount error',
	70: 'Communication error on send',
	71: 'Protocol error',
	72: 'Multihop attempted',
	73: 'Cross mount point (not really error)',
	74: 'Trying to read unreadable message',
	75: 'Value too large for defined data type',
	76: 'Given log. name not unique',
	77: 'f.d. invalid for this operation',
	78: 'Remote address changed',
	79: 'Cannot access a needed shared lib',
	80: 'Accessing a corrupted shared lib',
	81: '.lib section in a.out corrupted',
	82: 'Attempting to link in too many libs',
	83: 'Attempting to exec a shared library',
	84: 'Illegal byte sequence',
	86: 'Streams pipe error',
	87: 'Too many users',
	88: 'Socket operation on non-socket',
	89: 'Destination address required',
	90: 'Message too long',
	91: 'Protocol wrong type for socket',
	92: 'Protocol not available',
	93: 'Unknown protocol',
	94:' Socket type not supported',
	95: 'Not supported',
	96: 'Protocol family not supported',
	97: 'Address family not supported by protocol family',
	98: 'Address already in use',
	99: 'Address not available',
	100: 'Network interface is not configured',
	101: 'Network is unreachable',
	102: 'Connection reset by network',
	103: 'Connection aborted',
	104: 'Connection reset by peer',
	105: 'No buffer space available',
	106: 'Socket is already connected',
	107: 'Socket is not connected',
	108: 'Cannott send after socket shutdown',
	109: 'Too many references',
	110: 'Connection timed out',
	111: 'Connection refused',
	112: 'Host is down',
	113: 'Host is unreachable',
	114: 'Socket already connected',
	115: 'Connection already in progress',
	116: 'Stale file handle',
	122: 'Quota exceeded',
	123: 'No medium (in tape drive)',
	125: 'Operation canceled',
	130: 'Previous owner died',
	131: 'State not recoverable'
};


export {
	ALLOC_STATIC,
	ERRNO_CODES,
	ERRNO_MESSAGES,
	PAGE_SIZE,
	PROGRAM_STRING,
	STATIC_BASE,
	WASM_PAGE_SIZE
};
