import { createClient } from "@supabase/supabase-js";
import type { Server } from "./server_types";
export const supabase = createClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_KEY, { auth: { persistSession: true } });

export async function getUserId(id: string) {
    //@ts-ignore
    const data: Server = await supabase.from("profiles").select().eq("id", id);
    return data?.data[0];
}
export async function getUserUsername(username: string) {
    //@ts-ignore
    const data: Server = await supabase.from("profiles").select().eq("username", username);
    return data?.data[0];
}

export function downloadImageUser(img: string) {
    if (!img) {
        return "https://cdn.doras.to/doras/defaultimage.jpeg"
    }
    return "https://cdn.doras.to/doras/user/" + img
}