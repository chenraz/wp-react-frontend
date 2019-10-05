/**
 * Allow mouse navigatin by hovering on element edges
 */

 /**
  * External Dependencies
  */
// const { Component } = wp.element;
import React from 'react';
// const { createHigherOrderComponent } = wp.compose;

/**
 * Internal Dependencies
 */
import { leftArrow, rightArrow } from './svgStrings';


export default 
// createHigherOrderComponent (
    ( WrappedComponent ) => { return class withMouseNavigation extends React.Component {
        constructor(props) {
            super( props );
            this.state = {
                horizontalHover: null,
            };
            
            this.onMouseLeave = this.onMouseLeave.bind( this );
            this.onMouseMove = this.onMouseMove.bind( this );
            // this.onClick = this.onClick.bind( this );
            
        }
    
        onMouseLeave() {
            this.setState( { horizontalHover: null } );
            document.body.style.cursor='';
        }  
        
        onMouseMove( event ) {


            const container = event.currentTarget;
            const { width, height, left, right, top, bottom } = container.getBoundingClientRect();
            const { allowedNavigation,onClick } = this.props;

            let horizontalHover = null;
            if ( 
                allowedNavigation.left
                && ( event.clientX - left ) < width / 3 
            ) {
                horizontalHover = 'left';
            } else if ( 
                allowedNavigation.right
                && ( right - event.clientX ) < width / 3 
            ) {
                horizontalHover = 'right';
            }
    
            if ( horizontalHover !== this.state.horizontalHover ) {
                this.setState( { horizontalHover } );
                var cursorStyle = '';
                if (horizontalHover) {
                    let arrow = 'right' === horizontalHover
                        ?   rightArrow
                        :   leftArrow;
                    cursorStyle=`url('data:image/svg+xml;utf8,` + arrow + `') 24 24, auto`
                }
                document.body.style.cursor=cursorStyle;
            }
        }
        
        render() {
			return (
                <div onMouseMove = { this.onMouseMove } onMouseLeave = { this.onMouseLeave } >

                    <WrappedComponent 
                        {...{
                            ...this.props,
                            ...this.state,
                        }}
                    />
                </div>
			);
        }    
        
    }};
    // 'withMouseNavigation'
// );


