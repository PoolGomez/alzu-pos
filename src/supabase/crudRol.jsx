import { supabase } from "../index";

const tabla = "tipodocumento"
export async function MostrarRolesXnombre(p)  {
    const {data}= await supabase.from(tabla).select().eq("nombre", p.nombre).maybeSingle();
    return data;
}
// export async function InsertarAdmin (p) {
//     await supabase.from(tabla).insert(p);
// }