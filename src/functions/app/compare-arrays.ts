const compareArrays = <T>(a: Array<T>, b: Array<T>) => {
	return a.length === b.length && a.every((element, index) => element === b[index]);
};

export default compareArrays;
