
import { BorderBottom } from '@mui/icons-material';
import { useAppDispatch } from '../../redux/Hooks';
import { CountryAction } from '../../redux/reducers/CountrySlice';
import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function ContinentNavbar() {
    const [activeKey, setActiveKey] = useState<string | null>('All');
    const dispatch = useAppDispatch()

    const handleNavClick = (region: string | null, key: string) => {
        setActiveKey(key); // Set the active key
        dispatch(CountryAction.patchState({ region }))
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link
                                style={{
                                    borderBottom: activeKey === 'All' ? '2px solid black' : 'none', // Custom border style
                                }}
                                active={activeKey === 'All'}
                                onClick={() => handleNavClick(null, 'All')}
                            >
                                All
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                style={{
                                    borderBottom: activeKey === 'Asia' ? '2px solid black' : 'none', // Custom border style
                                }}
                                active={activeKey === 'Asia'}
                                onClick={() => handleNavClick('Asia', 'Asia')}
                            >
                                Asia
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                style={{
                                    borderBottom: activeKey === 'Europe' ? '2px solid black' : 'none', // Custom border style
                                }}
                                active={activeKey === 'Europe'}
                                onClick={() => handleNavClick('Europe', 'Europe')}
                            >
                                Europe
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ContinentNavbar;



