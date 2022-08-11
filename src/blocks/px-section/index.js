/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> Import Edit Mode <===//
import Edit from './edit';
//===> Attirbutes Data <===//
import metadata from './block.json';

//===> WordPress Modules <===//
const { registerBlockType } = wp.blocks;

//===> Register Block <===//
registerBlockType(metadata.name, {
    /**===> Block Meta <===*/
    

    /**===> @see ./edit.js <===*/
    edit: Edit,

    /**===> Block Output <===*/
    save : () => {
        return (<></>)
    }
});
