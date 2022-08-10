/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
export default function block_options () {
    return {
        //===> Container Size <===//
        size : {
            type: 'string',
            default: 'container',
        },
        //===> Logo <===//
        logo : {
            type: 'boolean',
            default: true,
        },
        //===> Logo URL <===//
        logo_url : {
            type: 'string',
            default: 'https://via.placeholder.com/120x42',
        },
        //===> Navigation <===//
        navigation : {
            type: 'boolean',
            default: true,
        },
        //===> Action Area <===//
        action_area : {
            type: 'boolean',
            default: true,
        },
    }
}