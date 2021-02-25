import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow:  0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      border: blue;
      width: 33.3333%;
      text-align: center;
      >a{
          display: flex;
          flex-direction: column;
          padding: 4px 0;
          justify-content: center;
          align-items: center;
        .icon{
          width: 24px;  
          height: 24px;
        }
        &.selected{
          color:red;
          .icon{
            fill:red;
          }
        }
      }
    }
  }  
`

const Nav = ()=>{
    return(
        <NavWrapper>
                <ul>
                    <li>
                        <NavLink to="/tags" activeClassName="selected">
                            <Icon name="tag"/>
                            标签页面
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/money" activeClassName="selected">
                            <Icon name="money"/>
                            记账页面
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Statistics" activeClassName="selected">
                            <Icon name="chart"/>
                            统计页面
                        </NavLink>
                    </li>
                </ul>
        </NavWrapper>
    )
}
export default Nav;