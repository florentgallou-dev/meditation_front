import {
  AppBar,
  AppBarClasses,
  LocalesMenuButton,
  ToggleThemeButton,
  useAuthProvider
} from 'react-admin';
import type { AppBarProps } from 'react-admin';
import { Box, Typography } from '@mui/material';
import { darkTheme, lightTheme } from './components/Theme/themes';

const CustomAppBar = ({ classes, userMenu, ...props }: AppBarProps) => {
  const authProvider = useAuthProvider();

  return (
    <AppBar userMenu={userMenu ?? !!authProvider} {...props}>
      <Typography
        variant="h6"
        color="inherit"
        className={AppBarClasses.title}
        id="react-admin-title"
      />
      {/* <Logo /> */}
      <h1 className="ml-5 text-xl">BO Méditations</h1>
      <Box component="span" sx={{ flex: 0 }} />
      {/* <DocTypeMenuButton /> */}
      <Box component="span" sx={{ flex: 0.5 }} />
      <LocalesMenuButton
        languages={[
          { locale: 'en', name: 'English' },
          { locale: 'fr', name: 'Français' },
        ]}
      />
      <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
    </AppBar>
  );
};

export default CustomAppBar;