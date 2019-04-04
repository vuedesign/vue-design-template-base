export default {
    data() {
        return {
            mixin: 'mixin',
            FORM: {
                SIZE: 'small',
                LABEL_WIDTH: '80px'
            }
        };
    },
    methods: {
        testMixin() {
            console.log(this.mixin);
        }
    }
};
