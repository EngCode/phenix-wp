//===> Attirbutes Data <===//
import block_options from './attributes';
const block_properties = block_options();

//====> WP Modules <====//
const {
    PanelBody,
    SelectControl,
    ToggleControl
} = wp.components;

const {
    InspectorControls,
    useBlockProps,
    MediaUpload
} = wp.blockEditor;

const { useSelect } = wp.data;
const { ServerSideRender } = wp.serverSideRender;

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Options <===//
    const set_logo = logo => setAttributes({ logo });
    const set_navigation = navigation => setAttributes({ navigation });
    const set_action_area = action_area => setAttributes({ action_area });

    //===> Settings <===//
    const set_size = size => setAttributes({ size });
    const set_logo_url = media => setAttributes({logo_url: media.url});

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> All Attributes <===//
    // const {
    //     size,
    //     logo,
    //     logo_url,
    //     navigation,
    //     action_area
    // } = attributes;

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Block Elements">
                {/*=== Logo ===*/}
                <ToggleControl label="Enable Logo" checked={attributes.logo} onChange={set_logo}/>

                {/*=== Navigation ===*/}
                <ToggleControl label="Enable Navigation Menu" checked={attributes.navigation} onChange={set_navigation}/>
                
                {/*=== Action Area ===*/}
                <ToggleControl label="Enable Action Area" checked={attributes.action_area} onChange={set_action_area}/>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Block Settings">
                {/*=== Logo Uploader ===*/}
                {attributes.logo ?
                    <MediaUpload onSelect={ set_logo_url } value={attributes.logo_url}
                        render={({open}) => (
                            <div class="mb-20 cursor-pointer" onClick={open}>
                                {/* label */}
                                <label className="mb-10">Upload Logo</label>
                                {/* elements group */}
                                <div className="flexbox align-center-y align-between">
                                    <img src={attributes.logo_url} style={{"max-height": "2.25rem"}} />
                                    <button onClick={open} class="btn square primary small radius-sm fs-12 fal fa-upload"></button>
                                </div>
                                {/* //elements group */}
                            </div>
                        )}
                    />
                : null}

                {/*=== Container Size ===*/}
                <SelectControl key="container_size" label="Container Size" value={attributes.size} onChange={set_size} options={[
                    { label: 'Small',  value: 'container-sm' },
                    { label: 'Medium', value: 'container-md' },
                    { label: 'Normal', value: 'container' },
                    { label: 'Large',  value: 'container-xl' },
                    { label: 'Full Width',  value: 'container-fluid' },
                ]}/>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div { ...blockProps }>
            <ServerSideRender block="theme/px-header" attributes={{block_properties}}/>
        </div>
    </>);
}