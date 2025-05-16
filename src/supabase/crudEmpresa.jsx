import Swal from "sweetalert2";
import { supabase} from "../index"
const tabla ="empresa";
export async function InsertarEmpresa(p){
    const { data , error} = await supabase.from(tabla).insert(p).select().maybeSingle();
    if(error){
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: error.message,
        //     footer: '<a href="#">Why do I have this issue?</a>'
        //     });
            return;
    }
    return data;
}