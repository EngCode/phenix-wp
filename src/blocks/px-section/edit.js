//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixBackground from '../px-components/px-background';
import PhenixColor from '../px-components/px-colors';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_size = size => setAttributes({ size });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_container = container => setAttributes({ container });
    const set_container_flex = container_flex => setAttributes({ container_flex });

    //===> Set Phenix View <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'],
            blockElement = '.wp-block-design-px-section[data-src]';

        //===> Get the Element from Site Editor <===//
        if (siteEditor) {
            blockElement = siteEditor.document.querySelectorAll('.px-media');
            blockElement = [...blockElement];
            Phenix(blockElement).multimedia();
        }

        //===> Set Background <===//
        if (!siteEditor) Phenix(blockElement).multimedia();
    }

    //===> Set Background <===//
    const set_background = background => {
        //===> Original Classes <===//
        let original = attributes.className.replaceAll('  ', ' ').replace(' px-media', ''),
            current  = attributes.px_bg,
            rotate = attributes.px_bg_rotate;

        //===> Remove Current Value <===//
        if (attributes.px_bg) original = original.replace(current, '');
        if (rotate) original = original.replace(rotate, '');

        //===> Update Background <===//
        setAttributes({
            px_bg : background.value,
            px_bg_type : background.type,
        });

        //===> Update Rotation <===//
        if (background.rotation) {
            original = original.replace(rotate, '');
            setAttributes({px_bg_rotate : background.rotation,})
        }

        //===> Set Background [Colors, Gradients] <===//
        if (background.type != 'image') {
            setAttributes({className : `${original} ${background.value}${background.rotation ? ' '+background.rotation : ''}`});
        }

        //===> Set Backgeround Image <===//
        else if (background.value) {
            //===> Set Background <===//
            setPhenixView();
            setAttributes({className : `${original} px-media`});
        }
    }

    //===> Set Color <===//
    const set_color = color => {
        //===> Get Value <===//
        let current  = attributes.px_color,
            original = attributes.className.replace('  ', ' ');

        //===> Remove Current Value <===//
        if (current) original = original.replace(current, '');

        //===> Set New Value <===//
        setAttributes({
            px_color  : color,
            className : `${original} ${color}`,
        });
    }

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const TagName = attributes.tagName;

    //===> onLoad Set Background <===//
    if(attributes.px_bg_type === 'image') useEffect(() => setPhenixView());
    if (attributes.px_bg_type === 'image') blockProps["data-src"] = attributes.px_bg;

    //===> Container Options <===//
    const container_options = {
        size : attributes.size,
        flexbox : attributes.container_flex ? 'flexbox' : '',
    }

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Section Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>

                {/*=== Container ===*/}
                <ToggleControl label="With Container" checked={attributes.container} onChange={set_container}/>
            </PanelBody>
            {/*=== Container Options ===*/}
            {attributes.container ? <PanelBody title="Container" initialOpen={false}>
                {/*=== Container Size ===*/}
                <SelectControl key="container_size" label="Container Size" value={attributes.size} onChange={set_size} options={[
                    { label: 'Small',  value: 'container-sm' },
                    { label: 'Medium', value: 'container-md' },
                    { label: 'Normal', value: 'container' },
                    { label: 'Large',  value: 'container-xl' },
                    { label: 'Full Width',  value: 'container-fluid' },
                ]}/>

                {/*=== Container Size ===*/}
                <ToggleControl label="Flex Container" checked={attributes.container_flex} onChange={set_container_flex}/>
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title="Typography" initialOpen={false}>
                {/* Text Color */}
                <PhenixColor onChange={set_color} value={attributes.px_color} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Background" initialOpen={false}>
                <PhenixBackground onChange={set_background} type={attributes.px_bg_type} value={attributes.px_bg} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <TagName { ...blockProps }>
            {attributes.container ?
                <div className={`${container_options.size} ${container_options.flexbox}`}>
                    <InnerBlocks />
                </div>
            :
                <InnerBlocks />
            }
        </TagName>
    </>);
}