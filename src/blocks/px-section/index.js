/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
*/

//===> Block Data <===//
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

//===> WordPress Modules <===//
const { registerBlockType } = wp.blocks;

//===> Register Block <===//
registerBlockType(metadata, {
    /**===> @see ./edit.js <===*/
    edit: Edit,

    /**===> Block Output <===*/
    save : Save
});
