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

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Settings <===//
    const set_size = size => setAttributes({ size });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_container = container => setAttributes({ container });
    const set_container_flex = container_flex => setAttributes({ container_flex });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const TagName = attributes.tagName;

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Section Settings">
                {/*=== Container ===*/}
                <ToggleControl label="With Container" checked={attributes.container} onChange={set_container}/>

                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>
                
                {/*=== Container Options ===*/}
                {attributes.container ? <>
                    {/*=== Container Size ===*/}
                    <ToggleControl label="Flex Container" checked={attributes.container_flex} onChange={set_container_flex}/>
                    
                    {/*=== Container Size ===*/}
                    <SelectControl key="container_size" label="Container Size" value={attributes.size} onChange={set_size} options={[
                        { label: 'Small',  value: 'container-sm' },
                        { label: 'Medium', value: 'container-md' },
                        { label: 'Normal', value: 'container' },
                        { label: 'Large',  value: 'container-xl' },
                        { label: 'Full Width',  value: 'container-fluid' },
                    ]}/>
                </> : null}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <TagName { ...blockProps }>
            {attributes.container ? 
                <div className={`${attributes.size}`}>
                    <InnerBlocks />
                </div>
            :
                <InnerBlocks />
            }
        </TagName>
    </>);
}