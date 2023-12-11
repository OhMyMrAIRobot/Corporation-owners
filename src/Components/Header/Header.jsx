import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Autocomplete, IconButton, Menu, TextField, Typography} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate} from "react-router-dom";
import "./Header.css"
import i18n from "../../i18n";
import {Link as MyLink} from '@mui/material'
import {useTranslation} from "react-i18next";
import {useState} from "react";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export default function Header() {

    const { t } = useTranslation();
    const persons = t("persons", { returnObjects: true });
    const navigate = useNavigate();

    let index = 1;
    const personList = [];
    persons.forEach((person) => {
        personList.push({ label: person.name, id: index })
        index++;
    })
    
    const swapLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ru')
        } else {
            i18n.changeLanguage('en')
        }
    }

    const swapLanguageMenuWrapper = () => {
        swapLanguage()
        handleCloseNavMenu()
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [
        [t('appName'), '/'],
        [t('appFigures'), '/Persons'],
        [t('appAbout'),'/About'],
    ]

    const [inputValue, setInputValue] = useState("")
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                    }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page[0]} onClick = {handleCloseNavMenu}>
                                    <Link
                                        to = {page[1]}
                                        className = "MobileLink"
                                    >
                                        {page[0]}
                                    </Link>
                                </MenuItem>
                            ))}
                            {
                                <MenuItem key={4} onClick={swapLanguageMenuWrapper}>
                                    {t('chgLng')}
                                </MenuItem>
                            }
                        </Menu>
                    </Box>
                    <Typography
                        variant="body1"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' }
                    }}
                    >
                        <Link
                            to = "/"
                            className = "NavTitle"
                        >
                            {t('appName')}
                        </Link>

                        <Link
                            to = "/Persons"
                            className = "NavLink"
                        >
                            {t('appFigures')}
                        </Link>
                        <Link
                            to = "/About"
                            className = "NavLink"
                        >
                            {t('appAbout')}
                        </Link>

                        <MyLink
                            sx={{
                                textDecoration: 'none'
                            }}
                            className = "NavLink"
                             color = 'inherit'
                            onClick={swapLanguage}
                        >
                            {t('chgLng')}
                        </MyLink>

                    </Typography>
                    <Search>
                        <Autocomplete
                            sx={{
                                width: 'auto',
                                minWidth: 270,
                                height: '50px',
                                backgroundColor: 'background.paper'
                            }}
                            autoComplete={true}
                            clearOnEscape={true}
                            clearOnBlur={true}
                            noOptionsText="Нет результатов"
                            renderInput={(params) =>
                                <TextField
                                {...params}
                                label = {t('search')}
                            />}
                            options={personList}
                            onChange={(event, value, reason, details) => {
                                personList.forEach((person) => {
                                    if (person === value){
                                        setInputValue(person.id)
                                    }
                                })
                            }
                            }
                            onKeyPressCapture={(event) => {
                                if (event.code === 'Enter' && inputValue !== ""){
                                    navigate(`/Persons/${inputValue}`);
                                    window.scrollTo(0, 0);
                                }
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}