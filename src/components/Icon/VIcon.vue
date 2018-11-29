<template>
    <font-awesome-icon :class="color" :icon="iconType" :size="iconSize" />
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
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return ['add','delete','help','settings','upload','download','move','tick','collapse','expand'].indexOf(value) !== -1
            }
        },
        size: {
            type: String,
            default: 's',
            validator: function (value) {
                return ['xs','s','m','l','xl'].indexOf(value) !== -1
            }
        },
        color: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary','secondary','danger','warning'].indexOf(value) !== -1
            }
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
        },
        iconSize: function() {
            let iconSize = '';

            switch (this.size) {
                case 'xs':
                    iconSize = 'xs';
                    break;
                case 's':
                    iconSize = 'sm';
                    break;
                case 'm':
                    iconSize = 'lg';
                    break;
                case 'l':
                    iconSize = '2x';
                    break;
                case 'xl':
                    iconSize = '5x';
                    break;
            }
            return iconSize;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";

.primary {
    color: $primary;
}

.secondary {
    color: $secondary;
}

.danger {
    color: $danger;
}

.warning {
    color: $warning;
}

</style>