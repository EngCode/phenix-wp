/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
const { registerBlockType } = wp.blocks;

//===> Import Edit Functions <===//
import Edit from './edit';

//===> Attirbutes Data <===//
import block_options from './attributes';
const block_properties = block_options();

//===> Register Block <===//
registerBlockType('theme/px-header', {
    /**===> Block Meta <===*/
    icon     : <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"></path></svg>,
    category : "theme",
    title    : "Phenix Header",
    textdomain  : "phenix",
    apiVersion  : 2,
    supports    : {"html": true},
    description : "Main Header Block for Phenix Themes.",
    attributes  : block_properties,
    supports: {
        align: ['full','wide'],
        multiple: false, //==> Use the block just once per post
    },

    /**===> @see ./edit.js <===*/
    edit: Edit,

    /**===> Block Output <===*/
    // save : null
});