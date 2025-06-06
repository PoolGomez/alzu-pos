import { createContext, useContext, useEffect, useState } from "react"
import { supabase, MostrarUsuarios, InsertarEmpresa, InsertarAdmin, MostrarTipoDocumentos, MostrarRolesXnombre } from "../index"

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        const {data} = supabase.auth.onAuthStateChange(async(event, session) => {
            if(session?.user == null){
                setUser(null)
            }else{
                setUser(session?.user);
                insertarDatos(session?.user.id, session?.user.email)
            }
            
        });
        return () => {
            data.subscription;
        }
    },[]);

    const insertarDatos = async (id_auth, correo) => {
        const response = await MostrarUsuarios({id_auth: id_auth})
        if(response){
            return;
        }else{
            const responseEmpresa = await InsertarEmpresa(
                {
                    id_auth: id_auth,
                    id_usuaurio: response?.id
                });
            const responseTipoDoc = await MostrarTipoDocumentos({id_empresa: responseEmpresa?.id});

            const responseRol= await MostrarRolesXnombre({nombre:"superadmin"})
            const pUser = {
                id_tipodocumento: responseTipoDoc[0]?.id,
                id_rol: responseRol?.id,
                correo: correo,
                fecharegistro: new Date(),
                id_auth: id_auth,
            }
            await InsertarAdmin(pUser)
        }
    }

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth= () => {
    return useContext(AuthContext)
}