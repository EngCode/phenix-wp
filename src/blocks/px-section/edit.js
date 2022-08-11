//====> WP Modules <====//
const {
    PanelBody,
    SelectControl,
    ToggleControl
} = wp.components;

const {
    InspectorControls,
    useBlockProps
} = wp.blockEditor;

const { useSelect } = wp.data;
const { ServerSideRender } = wp.serverSideRender;

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Settings <===//
    const set_container = container => setAttributes({ container });
    const set_size = size => setAttributes({ size });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Section Settings">
                {/*=== Container ===*/}
                <ToggleControl label="With Container" checked={attributes.container} onChange={set_container}/>
                
                {/*=== Container Size ===*/}
                {attributes.container ?
                    <SelectControl key="container_size" label="Container Size" value={attributes.size} onChange={set_size} options={[
                        { label: 'Small',  value: 'container-sm' },
                        { label: 'Medium', value: 'container-md' },
                        { label: 'Normal', value: 'container' },
                        { label: 'Large',  value: 'container-xl' },
                        { label: 'Full Width',  value: 'container-fluid' },
                    ]}/>
                : null}

            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div { ...blockProps }>
            XXXXX
        </div>
    </>);
}