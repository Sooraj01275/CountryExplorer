import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Popover, TextField, Tooltip, Typography } from '@mui/material'
import style from './Login.module.css'
import { Twitter } from '../../components/icons/Twitter'
import { Google } from '../../components/icons/Google'
import { FaceBook } from '../../components/icons/Facebook'
import { LinkedIn } from '../../components/icons/LinkedIn'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Info } from '@mui/icons-material'
import { useAppDispatch } from '../../redux/Hooks'
import { fetchCountryData } from '../../redux/action/CountryAction'
import { useNavigate } from 'react-router-dom'


interface LoginData {
    email?: string;
    password: string;
}

export const Login = () => {

    const [loginData, setLoginData] = useState<LoginData>({ email: "", password: "" });
    const initialValues: LoginData = { email: "", password: "" };
    const dispatch = useAppDispatch()
    const navidate = useNavigate()

    useEffect(() => {
        const isLogin = sessionStorage.getItem('isLogin')

        if (isLogin) {
            navidate('/home')
        }
    }, [])

    const validationSchema = Yup.object({
        email: Yup.string().email('Please enter the valid email').max(255).required('Please enter the valid email').required(),
        password: Yup.string().required()
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[^\+\-=()]+$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character from the set [!@#$%^&*]'
            )
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: () => {
            console.log();
        },
    });

    const handleChange = (key: keyof LoginData, value: string) => {
        setLoginData({ ...loginData, [key]: value });
        formik.handleChange(key)(value);
    };

    const handleSubmit = () => {

        if (!formik.errors.email && !formik.errors.password && loginData.email !== "" && loginData.password !== "") {
            navidate('/home')
            sessionStorage.setItem('isLogin', 'true')
        }
    }

    return (
        <Box gap={2} className={style.container}>
            <Box display={'grid'} p={2}>
                <Typography fontSize={'32px'} fontWeight={600} textAlign={{xs:'center',sm:'start'}}>Sign In</Typography>
                <Box className='flexCenterCenter' pb={1}>
                    <Typography>New User?</Typography>
                    <Button
                        disableElevation
                        disableFocusRipple
                        disableTouchRipple
                        disableRipple
                        sx={{
                            ':hover': {
                                backgroundColor: 'transparent'
                            },
                            p:0
                        }}>
                        <Typography sx={{ textTransform: 'none' }}>Create an account</Typography>
                    </Button>

                </Box>
                <Box display={'grid'} gap={1}>
                    <TextField name="email" size='small' placeholder='UserName or Email'
                        autoComplete='off'
                        error={Boolean(formik.errors.email)}
                        value={loginData.email} onChange={(e) => handleChange('email', e.target.value)} />
                    <TextField size='small' name="password" placeholder="Password" variant="outlined" fullWidth={true} type="password"
                        value={loginData.password} onChange={(e) => handleChange('password', e.target.value)}
                        error={Boolean(formik.errors.password)}
                        autoComplete='off'
                        slotProps={{
                            input: {
                                endAdornment: (
                                    Boolean(formik.errors.password) ? <Tooltip title={'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'}>
                                        <Info color='error' sx={{ cursor: 'pointer' }} />
                                    </Tooltip>
                                        : null
                                )
                            }
                        }}
                    />
                </Box>
                <FormControlLabel sx={{ my: 2 }} control={<Checkbox />} label='Keep me signed In' />
                <Button onClick={handleSubmit} sx={{ bgcolor: '#000000' }} variant='contained'>
                    SignIn
                </Button>
                <Box my={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <hr className={style.line} />
                    <Typography sx={{ px: 1 }}>Or Sign In With</Typography>
                    <hr className={style.line} />
                </Box>
                <Box display={'flex'} justifyContent={'space-around'}>
                    <IconButton className={style.iconbutton}>
                        <Google />
                    </IconButton>
                    <IconButton className={style.iconbutton}>
                        <FaceBook />
                    </IconButton>
                    <IconButton className={style.iconbutton}>
                        <LinkedIn />
                    </IconButton>
                    <IconButton className={style.iconbutton}>
                        <Twitter />
                    </IconButton>
                </Box>
            </Box>
            <div className={style.imageWrapper}>
                <img src="/images/loginbg.png" width='450px' />
            </div>
        </Box>
    )
}