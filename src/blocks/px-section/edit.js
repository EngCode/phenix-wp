//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    InspectorControls,
    useInnerBlocksProps,
} from '@wordpress/block-editor';

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

    //===> Set Background <===//
    const set_background = background => {
        //===> Get Value <===//
        let current  = attributes.px_bg,
            original = attributes.className.replace('  ', ' ');

        //===> Remove Current Value <===//
        if (attributes.px_bg) original = original.replace(current, '');

        //===> Set New Value <===//
        if (background.value) {
            setAttributes({
                px_bg : background.value,
                px_bg_type : background.type,
                className : `${original} ${background.value}`,
            });
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