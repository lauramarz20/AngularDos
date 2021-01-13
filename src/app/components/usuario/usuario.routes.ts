import { Routes} from '@angular/router';

// import { HomeComponent} from './components/home/home.component';
// import { UsuarioComponent} from './components/usuario/usuario.component';
import { UsuarioNuevoComponent} from './usuario-nuevo.component';
import { UsuarioEditarComponent} from './usuario-editar.component';
import { UsuarioDetalleComponent} from './usuario-detalle.component';

// tslint:disable-next-line:variable-name
export const USUARIO_ROUTES: Routes = [
    {path: 'nuevo', component: UsuarioNuevoComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'detalle', component: UsuarioDetalleComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'nuevo'}

];
