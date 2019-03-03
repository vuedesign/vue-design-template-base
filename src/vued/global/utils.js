/**
 * @param arr
 * @returns {*}
 */
export function removeEmptyArrayElement(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === undefined || arr[i] === '') {
            arr.splice(i, 1);
            i = i - 1;
            // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
            // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
        }
    }
    return arr;
}

export const filtersCommit = (namespaced, name, time = 500) => {
    let timer = null;
    return {
        set(value) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.$store.commit(`${namespaced}/FILTERS`, Object.assign({}, {
                    [name]: value,
                    page: 1
                }));
                this.$router.push({
                    params: {
                        page: 1
                    }
                });
                clearTimeout(timer);
            }, time);
        },
        get() {
            return this.filters[name];
        }
    };
};
