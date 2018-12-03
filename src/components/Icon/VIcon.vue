<template>
    <font-awesome-icon :class="color" :icon="iconType" :size="iconSize" />
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrashAlt, faQuestion, faCog, faFileUpload, faFileDownload, faArrowsAlt, faCheck, faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrashAlt, faQuestion, faCog, faFileUpload, faFileDownload, faArrowsAlt, faCheck, faMinusSquare, faPlusSquare)

const iconObjects = {
    add: {
        faIconType: 'plus'
    },
    delete: {
        faIconType: 'trash-alt'
    },
    help: {
        faIconType: 'question'
    },
    settings: {
        faIconType: 'cog'
    },
    upload: {
        faIconType: 'file-upload'
    },
    download: {
        faIconType: 'file-download'
    },
    move: {
        faIconType: 'arrows-alt'
    },
    tick: {
        faIconType: 'check'
    },
    collapse: {
        faIconType: 'minus-square'
    },
    expand: {
        faIconType: 'plus-square'
    }
}

const iconSizes = {
    xs: {
        faIconSize: 'xs'
    },
    s: {
        faIconSize: 'sm'
    },
    m: {
        faIconSize: 'lg'
    },
    l: {
        faIconSize: '2x'
    },
    xl: {
        faIconSize: '5x'
    }
}

export default {
    name: 'v-header',
    props: {
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return Object.keys(iconObjects).indexOf(value) !== -1
            }
        },
        size: {
            type: String,
            default: 's',
            validator: function (value) {
                return Object.keys(iconSizes).indexOf(value) !== -1
            }
        },
        color: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary','secondary','danger','warning','black','white'].indexOf(value) !== -1
            }
        }
    },
    components: {
        'font-awesome-icon': FontAwesomeIcon
    },
    computed: {
        iconType: function() {
            const obj = iconObjects[this.type];
            if(obj) {
                return obj.faIconType;
            } else {
                return "";
            }
        },
        iconSize: function() {
            const obj = iconSizes[this.size];
            if(obj) {
                return obj.faIconSize;
            } else {
                return "";
            }
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

.black {
    color: $black;
}

.white {
    color: $white;
}

</style>