<template>
    <font-awesome-icon v-bind:icon="iconType" />
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrashAlt, faQuestion, faCog, faFileUpload, faFileDownload, faArrowsAlt, faCheck, faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrashAlt, faQuestion, faCog, faFileUpload, faFileDownload, faArrowsAlt, faCheck, faMinusSquare, faPlusSquare)

export default {
    name: 'v-header',
    props: {
        label: {
            type: String,
            default: 'Project Name'
        },
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return ['add','delete','help','settings','upload','download','move','tick','collapse','expand'].indexOf(value) !== -1
            }
        },
        size: {
            type: String,
            default: 'm'
        }
    },
    components: {
        'font-awesome-icon': FontAwesomeIcon
    },
    computed: {
        iconType: function() {
            let iconType = '';

            switch (this.type) {
                case 'add':
                    iconType = 'plus';
                    break;
                case 'delete':
                    iconType = 'trash-alt';
                    break;
                case 'help':
                    iconType = 'question';
                    break;
                case 'settings':
                    iconType = 'cog';
                    break;
                case 'upload':
                    iconType = 'file-upload';
                    break;
                case 'download':
                    iconType = 'file-download';
                    break;
                case 'move':
                    iconType = 'arrows-alt';
                    break;
                case 'tick':
                    iconType = 'check';
                    break;
                case 'collapse':
                    iconType = 'minus-square';
                    break;
                case 'expand':
                    iconType = 'plus-square';
                    break;
            }
            return iconType;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";


</style>