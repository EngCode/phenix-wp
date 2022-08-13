/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';

//===> Phenix Background <===//
export default class PhenixBackground extends Component {
    render () {
        //===> Properties <===//
        const {onClick} = this.props;

        //===> Buttons Creator <===//
        const make_buttons = (list) => {
            let output = [];
            //===> for each item <===//
            for (let index = 0; index < list.length; index++) {
                //===> Get Value <===//
                const name = list[index];

                //===> Convert to Title <===//
                let title = list[index].replace('bg-', '');
                    title = title.replace('-', ' ');

                //===> UpperCase Title <===//
                title = title.replace(/^\w/, function(c) {
                    return c.toUpperCase();
                });

                output.push(<button onClick={onClick} title={title} data-value={name} className={`${name} btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10`}></button>);
            }

            //===> Return Buttons <===//
            return output;
        }

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> Label <===*/}
                <label className='mb-10'>Select Background</label>
                {/*===> Background <===*/}
                <div className='flexbox'>
                    {make_buttons([
                        "bg-transparent",
                        "bg-primary",
                        "bg-secondary",
                        "bg-gray",
                        "bg-dark",
                        "bg-white",
                        "bg-alpha-05",
                        "bg-alpha-10",
                        "bg-alpha-25",
                        "bg-alpha-50",
                        "bg-alpha-75",
                        "bg-success",
                        "bg-danger",
                        "bg-warning",
                        "bg-info"
                    ])}
                    {/* Divider */}
                    <span className='border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                    {/* Offwhite */}
                    {make_buttons([
                        "bg-offwhite-primary",
                        "bg-offwhite-secondary",
                        "bg-offwhite-info",
                        "bg-offwhite-success",
                        "bg-ffwhite-danger",
                        "bg-offwhite-warning",
                        "bg-offwhite-smoke",
                        "bg-offwhite-smoke",
                        "bg-offwhite-gray",
                        "bg-offwhite-snow",
                        "bg-offwhite-snow",
                        "bg-offwhite-honeydew",
                        "bg-offwhite-mintcream",
                        "bg-offwhite-aliceblue",
                        "bg-offwhite-ghost",
                        "bg-offwhite-seashell",
                        "bg-offwhite-beige",
                        "bg-offwhite-oldlace",
                        "bg-offwhite-floral",
                        "bg-offwhite-ivory",
                        "bg-offwhite-antique",
                        "bg-offwhite-linen",
                        "bg-offwhite-lavenderblush"
                    ])}
                    {/* Divider */}
                    <span className='border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                    {/* Brands */}
                    {make_buttons([
                        "bg-facebook",
                        "bg-twitter",
                        "bg-youtube",
                        "bg-instagram",
                        "bg-snapchat",
                        "bg-whatsapp",
                        "bg-pinterest",
                        "bg-linkedin",
                        "bg-behance",
                        "bg-dribbble",
                        "bg-flicker"
                    ])}
                </div>
                {/*===> End Component <===*/}
            </div>
        )
    }
}