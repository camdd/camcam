import React, { useState } from 'react';
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from 'react95';
import styled from 'styled-components';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              👽 go
            </Button>
            {open && (
              <MenuList
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%'
                }}
                onClick={() => setOpen(false)}
              >

                <MenuListItem>
                  <Link to="/">
                  <span role='img' aria-label='📁'>
                    👾
                  </span>
                  home
                  </Link>
                </MenuListItem>

                <MenuListItem>
                  <Link to="/aboutme">  
                  <span role='img' aria-label='👨‍💻'>
                    👩🏻‍🚀
                  </span>
                  about me
                  </Link>
                </MenuListItem>

                <MenuListItem>
                  <Link to="/projects">
                  <span role='img' aria-label='📁'>
                    📁
                  </span>
                  projects
                  </Link>
                </MenuListItem>

                <MenuListItem>
                  <Link to="/blog">
                  <span role='img' aria-label='📁'>
                    👾
                  </span>
                  blog
                  </Link>
                </MenuListItem>
              </MenuList>
            )}
          </div>
          ˜”*°•.˜”*°• cam's supercool website •°*”˜.•°*”˜
          <TextInput placeholder='Search...' width={150} />
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Navbar;
